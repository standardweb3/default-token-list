const { createWalletClient, http } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const {
  StoryIliad,
  StoryOdyssey,
  Morph,
  Story,
  RiseSepolia,
} = require("../const/customChains");
const {
  base,
  kroma,
  morphHolesky,
  scroll,
  neonMainnet,
  taiko,
} = require("viem/chains");
const MatchingEngineABI = require("../abis/MatchingEngineABI.json");
const defaultTokenList = require("../../build/standard-default.tokenlist.json");
const { parse } = require("path");
require("dotenv").config();

/**
 * Multiplies a string representation of a number by a given exponent of base 10 (10exponent).
 *
 * - Docs: https://viem.sh/docs/utilities/parseUnits
 *
 * @example
 * import { parseUnits } from 'viem'
 *
 * parseUnits('420', 9)
 * // 420000000000n
 */
function parseUnits(value, decimals) {
  const formattedValue = value.includes("e")
    ? new Intl.NumberFormat("en-US", {
        style: "decimal",
        maximumFractionDigits: 18,
        useGrouping: false,
      }).format(Number.parseFloat(value))
    : value;

  let [integer = "0", fraction = "0"] = formattedValue.split(".");

  const negative = integer.startsWith("-");
  if (negative) integer = integer.slice(1);

  // trim trailing zeros.
  fraction = fraction.replace(/(0+)$/, "");

  // round off if the fraction is larger than the number of decimals.
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals),
    ];

    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else fraction = `${left}${rounded}`;

    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }

    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }

  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}

async function getPairs(network) {
  try {
    console.log("Getting pairs for network:", network.name, network.chainId);
    const chainId = network.id;
    const pairs = defaultTokenList.pairs.filter(
      (pair) => pair.base.chainId === chainId
    );
    return pairs;
  } catch (error) {
    console.error("Error getting pairs:", error);
  }
}

async function addPair(pair, matchingEngine, walletClient, abi) {
  try {
    // Add pair
    const result = await walletClient.writeContract({
      address: matchingEngine,
      abi: abi,
      functionName: "addPair",
      args: [
        pair.base.address,
        pair.quote.address,
        parseUnits(pair.listing_price.toString(), 8),
        0,
        pair.base.address,
      ],
      gas: 30000000, // Set the gas limit (adjust as needed)
    });

    console.log("Transaction hash for adding pair:", result);
  } catch (error) {
    console.error("Error calling contract:", error);
  }
}

async function setSpread(pair, matchingEngine, walletClient, abi) {
  if (pair.buy_tick === undefined && pair.sell_tick === undefined) {
    console.log("Spread already set");
    return;
  }
  try {
    // Set up ticks for listed pair
    const result2 = await walletClient.writeContract({
      address: matchingEngine,
      abi: abi,
      functionName: "setSpread",
      args: [
        pair.base.address,
        pair.quote.address,
        parseUnits(pair.buy_tick.toString() ?? 1000000, 8), // 1000000(0.1%) spread limit
        parseUnits(pair.sell_tick.toString() ?? 1000000, 8), // 1000000(0.1%) spread limit
      ],
    });

    console.log("Transaction hash for setting ticks:", result2);
  } catch (error) {
    console.error("Error setting up ticks:", error);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processPairs(pairs, matchingEngine, walletClient, abi) {
  for (const pair of pairs) {
    await addPair(pair, matchingEngine, walletClient, abi);
    await setSpread(pair, matchingEngine, walletClient, abi);
    await sleep(2000); // Wait for 2 seconds
  }
}

async function main() {
  const account = privateKeyToAccount(process.env.ADMIN_PRIVATE_KEY);
  const walletClient = createWalletClient({
    account,
    // Change network to configure pair list to add in a network
    chain: RiseSepolia,
    transport: http(process.env.RISE_SEPOLIA_RPC),
  });

  const abi = MatchingEngineABI;

  // Change network to configure pair list to add in a network
  const pairs = await getPairs(RiseSepolia);

  console.log("Pairs to add:", pairs.length);
  // make contract call on each pair in the list
  const matchingEngine =
    defaultTokenList.matchingEngine["Rise Sepolia"].address;

  await processPairs(pairs, matchingEngine, walletClient, abi);
}

main();
