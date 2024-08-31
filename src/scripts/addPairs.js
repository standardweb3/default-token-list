const { createWalletClient, http, parseUnits } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { base, kroma, morphHolesky, scroll, neonMainnet, taiko} = require("viem/chains");
//const { MatchingEngineABI } = require('./abis/matchingEngineAbi');
const { ChainIds } = require("../const");
const { MatchingEngineABI } = require("../abis/matchingEngineAbi");
const defaultTokenList = require("../../build/standard-default.tokenlist.json");
require("dotenv").config();

async function getPairs(networkName) {
  try {
    const chainId = ChainIds[networkName];
    const pairs = defaultTokenList.pairs.filter(
      (pair) => pair.base.chainId == chainId
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
      ],
    });

    console.log("Transaction hash for adding pair:", result);
  } catch (error) {
    console.error("Error calling contract:", error);
  }
}

async function setSpread(pair, matchingEngine, walletClient, abi) {
  if(pair.buy_tick === undefined && pair.sell_tick === undefined) {
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
        pair.buy_tick ?? 200,
        pair.sell_tick ?? 200,
      ],
    });

    console.log("Transaction hash for setting ticks:", result2);
  } catch (error) {
    console.error("Error setting up ticks:", error);
  }
}

async function main() {
  const account = privateKeyToAccount(process.env.ADMIN_PRIVATE_KEY);
  const walletClient = createWalletClient({
    account,
    chain: taiko,
    transport: http(process.env.TAIKO_RPC),
  });

  const abi = MatchingEngineABI;

  const pairs = await getPairs("Taiko Mainnet");

  console.log("Pairs to add:", pairs.length);
  // make contract call on each pair in the list
  const matchingEngine =
    defaultTokenList.matchingEngine["Taiko Mainnet"].address;

  for (const pair of pairs) {
    await addPair(pair, matchingEngine, walletClient, abi);
    await setSpread(pair, matchingEngine, walletClient, abi);
  }
}

main();
