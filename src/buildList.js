const { version } = require("../package.json");
const base = require("./tokens/base.json");
const story = require("./tokens/story.json");
const morph = require("./tokens/morph.json");
const riseSepolia = require("./tokens/rise_sepolia.json");
const monadTestnet = require("./tokens/monad_testnet.json");
const inkSepolia = require("./tokens/ink_sepolia.json");
const somniaTestnet = require("./tokens/somnia_testnet.json");
// pairs
const storyPairs = require("./pairs/story.json");
const morphPairs = require("./pairs/morph.json");
const riseSepoliaPairs = require("./pairs/rise_sepolia.json");
const monadTestnetPairs = require("./pairs/monad_testnet.json");
const inkSepoliaPairs = require("./pairs/ink_sepolia.json");
const somniaTestnetPairs = require("./pairs/somnia_testnet.json");

// groups
const storyGroups = require("./groups/story.json");
const riseSepoliaGroups = require("./groups/rise_sepolia.json");
const monadTestnetGroups = require("./groups/monad_testnet.json");
const inkSepoliaGroups = require("./groups/ink_sepolia.json");
const somniaTestnetGroups = require("./groups/somnia_testnet.json");


// group pairs
const storyGroupPairs = require("./groupPairs/story.json");
const riseSepoliaGroupPairs = require("./groupPairs/rise_sepolia.json");
const monadTestnetGroupPairs = require("./groupPairs/monad_testnet.json");
const inkSepoliaGroupPairs = require("./groupPairs/ink_sepolia.json");
const somniaTestnetGroupPairs = require("./groupPairs/somnia_testnet.json");
// group tokens
const storyGroupTokens = require("./groupTokens/story.json");
const riseSepoliaGrouptokens = require("./groupTokens/rise_sepolia.json");
const monadTestnetGroupTokens = require("./groupTokens/monad_testnet.json");
const inkSepoliaGroupTokens = require("./groupTokens/ink_sepolia.json");
const somniaTestnetGroupTokens = require("./groupTokens/somnia_testnet.json");
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
      "Somnia Testnet": somniaTestnetGroups,
    },
    groupTokens: {
      "Story": storyGroupTokens,
      "Rise Sepolia": riseSepoliaGrouptokens,
      "Monad Testnet": monadTestnetGroupTokens,
      "Ink Sepolia": inkSepoliaGroupTokens,
      "Somnia Testnet": somniaTestnetGroupTokens,
    },
    groupPairs: {
      "Story": storyGroupPairs,
      "Rise Sepolia": riseSepoliaGroupPairs,
      "Monad Testnet": monadTestnetGroupPairs,
      "Ink Sepolia": inkSepoliaGroupPairs,
      "Somnia Testnet": somniaTestnetGroupPairs,
    },
    scannerLink: {
      Story: "https://oklink.com/story/",
      "Rise Sepolia": "https://testnet-explorer.riselabs.xyz/",
      "Monad Testnet": "https://testnet.monadexplorer.com/",
      "Ink Sepolia": "https://explorer-sepolia.inkonchain.com/",
      "Somnia Testnet": "https://testnet.somnia.xyz/",
    },
    matchingEngine: {
      "Story": {
        address: "0x3bd945d969e2a4b76edf8cf09fe6357bb6682f4f",
        startBlock: 915937,
      },
      "Rise Sepolia": {
        address: "0x1aA4958Ed3a2e9604b70A5790A79A3a80021C31f",
        startBlock: 9157855,
      },
      "Monad Testnet": {
        address: "0xBBa4a83498F68f915f3E2f9b1dF1e28220968e96",
        startBlock: 4869550,
      },
      "Ink Sepolia": {
        address: "0x00cB733CBF6fb7079eeeC9EA9b50863756dDbfBE",
        startBlock: 11548769,
      },
      "Somnia Testnet": {
        address: "0x8E9e786f757B881C7B456682Ae7D2a06820220b1",
        startBlock: 53564391,
      }
    },
    wAIfuManager: {
      "Rise Sepolia": {
        address: "0x2C1d127d610DFBdb45D9f05eEec4faAFc9Db5029",
        startBlock: 4849129,
      },
      "Ink Sepolia": {
        address: "0xc63E21C4285Ffe3F258A3486A679C7ac5EDD696C",
        startBlock: 11599968,
      },
    },
    tags: {},
    logoURI: "https://avatars.githubusercontent.com/u/73440097?s=200&v=4",
    keywords: ["standard", "default"],
    tokens: [
      ...story,
      ...riseSepolia,
      ...monadTestnet,
      ...inkSepolia,
      ...somniaTestnet,
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
      ...somniaTestnetPairs,
    ],
  };
  return l1List;
};
