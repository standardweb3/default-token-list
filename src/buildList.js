const { version } = require("../package.json");
const base = require("./tokens/base.json");
const story = require("./tokens/story.json");
const morph = require("./tokens/morph.json");
const riseSepolia = require("./tokens/rise_sepolia.json");
const monadTestnet = require("./tokens/monad_testnet.json");
const inkSepolia = require("./tokens/ink_sepolia.json");

// pairs
const storyPairs = require("./pairs/story.json");
const morphPairs = require("./pairs/morph.json");
const riseSepoliaPairs = require("./pairs/rise_sepolia.json");
const monadTestnetPairs = require("./pairs/monad_testnet.json");
const inkSepoliaPairs = require("./pairs/ink_sepolia.json");

// groups
const storyGroups = require("./groups/story.json");
const riseSepoliaGroups = require("./groups/rise_sepolia.json");
const monadTestnetGroups = require("./groups/monad_testnet.json");
const inkSepoliaGroups = require("./groups/ink_sepolia.json");

// group pairs
const storyGroupPairs = require("./groupPairs/story.json");
const riseSepoliaGroupPairs = require("./groupPairs/rise_sepolia.json");
const monadTestnetGroupPairs = require("./groupPairs/monad_testnet.json");
const inkSepoliaGroupPairs = require("./groupPairs/ink_sepolia.json");

// group tokens
const storyGroupTokens = require("./groupTokens/story.json");
const riseSepoliaGrouptokens = require("./groupTokens/rise_sepolia.json");
const monadTestnetGroupTokens = require("./groupTokens/monad_testnet.json");
const inkSepoliaGroupTokens = require("./groupTokens/ink_sepolia.json");

const bridgeUtils = require("@uniswap/token-list-bridge-utils");

module.exports = function buildList() {
  const parsed = version.split(".");
  const l1List = {
    name: "Standard Labs Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    // groups are used to organize tokens in the app UI for Tradingview, each token is identified by its tag property
    groups:{
      "Story": storyGroups,
      "Rise Sepolia": riseSepoliaGroups,
      "Monad Testnet": monadTestnetGroups,
      "Ink Sepolia": inkSepoliaGroups,
    },
    groupTokens: {
      "Story": storyGroupTokens,
      "Rise Sepolia": riseSepoliaGrouptokens,
      "Monad Testnet": monadTestnetGroupTokens,
      "Ink Sepolia": inkSepoliaGroupTokens,
    },
    groupPairs: {
      "Story": storyGroupPairs,
      "Rise Sepolia": riseSepoliaGroupPairs,
      "Monad Testnet": monadTestnetGroupPairs,
      "Ink Sepolia": inkSepoliaGroupPairs,
    },
    scannerLink: {
      Story: "https://oklink.com/story/",
      "Rise Sepolia": "https://testnet-explorer.riselabs.xyz/",
      "Monad Testnet": "https://testnet.monadexplorer.com/",
      "Ink Sepolia": "https://explorer-sepolia.inkonchain.com/",
    },
    matchingEngine: {
      "Story": {
        address: "0x3bd945d969e2a4b76edf8cf09fe6357bb6682f4f",
        startBlock: 915937,
      },
      "Rise Sepolia": {
        address: "0x8E9e786f757B881C7B456682Ae7D2a06820220b1",
        startBlock: 4613007,
      },
      "Monad Testnet": {
        address: "0xBBa4a83498F68f915f3E2f9b1dF1e28220968e96",
        startBlock: 4869550,
      },
    },
    wAIfuManager: {
      "Rise Sepolia": {
        address: "0x2C1d127d610DFBdb45D9f05eEec4faAFc9Db5029",
        startBlock: 4849129,
      }
    },
    tags: {},
    logoURI: "https://avatars.githubusercontent.com/u/73440097?s=200&v=4",
    keywords: ["standard", "default"],
    tokens: [
      ...story,
      ...riseSepolia,
      ...monadTestnet,
      ...inkSepolia,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
    pairs: [
      ...storyPairs,
      ...riseSepoliaPairs,
      ...monadTestnetPairs,
      ...inkSepoliaPairs,
    ],
  };
  return bridgeUtils.chainify(l1List);
};
