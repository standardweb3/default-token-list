const { version } = require("../package.json");
const base = require("./tokens/base.json");
const storyOdyssey = require("./tokens/story_odyssey.json");
const story = require("./tokens/story.json");
const morph = require("./tokens/morph.json");
const riseSepolia = require("./tokens/rise_sepolia.json");

// pairs
const storyOdysseyPairs = require("./pairs/story_odyssey.json");
const storyPairs = require("./pairs/story.json");
const morphPairs = require("./pairs/morph.json");
const riseSepoliaPairs = require("./pairs/rise_sepolia.json");

// groups
const storyOdysseyGroups = require("./groups/story_odyssey.json");
const storyGroups = require("./groups/story.json");
const riseSepoliaGroups = require("./groups/rise_sepolia.json");

// group pairs
const storyOdysseyGroupPairs = require("./groupPairs/story_odyssey.json");
const storyGroupPairs = require("./groupPairs/story.json");
const riseSepoliaGroupPairs = require("./groupPairs/rise_sepolia.json");

// group tokens
const storyOdysseyGroupTokens = require("./groupTokens/story_odyssey.json");
const storyGroupTokens = require("./groupTokens/story.json");
const riseSepoliaGrouptokens = require("./groupTokens/rise_sepolia.json");

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
      "Story": storyGroups,
      "Rise Sepolia": riseSepoliaGroups,
    },
    groupTokens: {
      "Story Odyssey Testnet": storyOdysseyGroupTokens,
      "Story": storyGroupTokens,
      "Rise Sepolia": riseSepoliaGrouptokens,
    },
    groupPairs: {
      "Story Odyssey Testnet": storyOdysseyGroupPairs,
      "Story": storyGroupPairs,
      "Rise Sepolia": riseSepoliaGroupPairs,
    },
    scannerLink: {
      "Story Odyssey Testnet":
        "https://odyssey-testnet-explorer.storyscan.xyz/",
      Story: "https://oklink.com/story/"
    },
    matchingEngine: {
      "Story Odyssey Testnet": {
        address: "0x39800D00B0573317E8EABA8BFce1c71a59fD26ee",
        startBlock: 2299914,
      },
      "Story": {
        address: "0x3bd945d969e2a4b76edf8cf09fe6357bb6682f4f",
        startBlock: 915937,
      },
      "Rise Sepolia": {
        address: "0x8E9e786f757B881C7B456682Ae7D2a06820220b1",
        startBlock: 4613007,
      }
    },
    haifuManager: {
      "Rise Sepolia": {
        address: "0x2C1d127d610DFBdb45D9f05eEec4faAFc9Db5029",
        startBlock: 4849129,
      }
    },
    tags: {},
    logoURI: "https://avatars.githubusercontent.com/u/73440097?s=200&v=4",
    keywords: ["standard", "default"],
    tokens: [
      ...storyOdyssey,
      ...story,
      ...riseSepolia,
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
      ...storyPairs,
      ...riseSepoliaPairs,
    ],
  };
  return bridgeUtils.chainify(l1List);
};
