const { createWalletClient, http, parseUnits } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { StoryIliad, StoryOdyssey, Morph } = require("../const/customChains");
const {
  base,
  kroma,
  morphHolesky,
  scroll,
  neonMainnet,
  taiko,
} = require("viem/chains");
const MatchingEngineABI = require("../abis/MatchingEngineABI");
const defaultTokenList = require("../../build/standard-default.tokenlist.json");
require("dotenv").config();

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
      ],
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
    // Change network to configure pair list to add in a network
    chain: Morph,
    transport: http(process.env.STORY_ODYSSEY_RPC),
  });

  const abi = MatchingEngineABI;

  // Change network to configure pair list to add in a network
  const pairs = await getPairs(Morph);

  console.log("Pairs to add:", pairs.length);
  // make contract call on each pair in the list
  const matchingEngine =
    defaultTokenList.matchingEngine.Morph.address;

  for (const pair of pairs) {
    await addPair(pair, matchingEngine, walletClient, abi);
    await setSpread(pair, matchingEngine, walletClient, abi);
  }
}

main();
