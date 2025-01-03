const { version } = require("../package.json");
const base = require("./tokens/base.json");
const storyOdyssey = require("./tokens/story_odyssey.json");
const morph = require("./tokens/morph.json");

// pairs
const storyOdysseyPairs = require("./pairs/story_odyssey.json");
const morphPairs = require("./pairs/morph.json");

// groups
const storyOdysseyGroups = require("./groups/story_odyssey.json");

// group pairs
const storyOdysseyGroupPairs = require("./groupPairs/story_odyssey.json");

// group tokens
const storyOdysseyGroupTokens = require("./groupTokens/story_odyssey.json");

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
      "Story Odyssey Testnet": storyOdysseyGroups,
    },
    groupTokens: {
      "Story Odyssey Testnet": storyOdysseyGroupTokens,
    },
    groupPairs: {
      "Story Odyssey Testnet": storyOdysseyGroupPairs,
    },
    scannerLink: {
      Base: "https://basescan.org/",
      Kroma: "https://kromascan.com/",
      "Morph Holesky": "https://explorer-holesky.morphl2.io/",
      Mode: "https://modescan.io/",
      Fraxtal: "https://fraxscan.com/",
      Metal: "https://explorer.metall2.com/",
      Scroll: "https://scrollscan.com/",
      "Neon EVM MainNet": "https://neonscan.org/",
      "Taiko Mainnet": "https://taikoscan.io/",
      "Story Public Testnet": "https://testnet.storyscan.xyz/",
      "Story Odyssey Testnet":
        "https://odyssey-testnet-explorer.storyscan.xyz/",
      Morph: "https://explorer.morphl2.io/",
    },
    matchingEngine: {
      "Story Odyssey Testnet": {
        address: "0x8c1F7817657aAe22E22ce84d552fE0C01bD8A254",
        startBlock: 440605,
      },
    },
    tags: {},
    logoURI: "https://avatars.githubusercontent.com/u/73440097?s=200&v=4",
    keywords: ["standard", "default"],
    tokens: [
      ...storyOdyssey,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
    pairs: [
      ...storyOdysseyPairs,
    ],
  };
  return bridgeUtils.chainify(l1List);
};
