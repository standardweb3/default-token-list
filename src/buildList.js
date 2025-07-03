const { version } = require("../package.json");
const base = require("./tokens/base.json");
const story = require("./tokens/story.json");
const riseSepolia = require("./tokens/rise_sepolia.json");
const monadTestnet = require("./tokens/monad_testnet.json");
const inkSepolia = require("./tokens/ink_sepolia.json");
const somniaTestnet = require("./tokens/somnia_testnet.json");
const megaethTestnet = require("./tokens/megaeth_testnet.json");

// pairs
const storyPairs = require("./pairs/story.json");
const riseSepoliaPairs = require("./pairs/rise_sepolia.json");
const monadTestnetPairs = require("./pairs/monad_testnet.json");
const inkSepoliaPairs = require("./pairs/ink_sepolia.json");
const somniaTestnetPairs = require("./pairs/somnia_testnet.json");
const megaethTestnetPairs = require("./pairs/megaeth_testnet.json");

// groups
const storyGroups = require("./groups/story.json");
const riseSepoliaGroups = require("./groups/rise_sepolia.json");
const monadTestnetGroups = require("./groups/monad_testnet.json");
const inkSepoliaGroups = require("./groups/ink_sepolia.json");
const somniaTestnetGroups = require("./groups/somnia_testnet.json");
const megaethTestnetGroups = require("./groups/megaeth_testnet.json");

// group pairs
const storyGroupPairs = require("./groupPairs/story.json");
const riseSepoliaGroupPairs = require("./groupPairs/rise_sepolia.json");
const monadTestnetGroupPairs = require("./groupPairs/monad_testnet.json");
const inkSepoliaGroupPairs = require("./groupPairs/ink_sepolia.json");
const somniaTestnetGroupPairs = require("./groupPairs/somnia_testnet.json");
const megaethTestnetGroupPairs = require("./groupPairs/megaeth_testnet.json");

// group tokens
const storyGroupTokens = require("./groupTokens/story.json");
const riseSepoliaGrouptokens = require("./groupTokens/rise_sepolia.json");
const monadTestnetGroupTokens = require("./groupTokens/monad_testnet.json");
const inkSepoliaGroupTokens = require("./groupTokens/ink_sepolia.json");
const somniaTestnetGroupTokens = require("./groupTokens/somnia_testnet.json");
const megaethTestnetGroupTokens = require("./groupTokens/megaeth_testnet.json");

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
    groups: {
      Story: storyGroups,
      "MegaETH Testnet": megaethTestnetGroups,
      "RISE Testnet": riseSepoliaGroups,
      "Monad Testnet": monadTestnetGroups,
      "Ink Sepolia": inkSepoliaGroups,
      "Somnia Testnet": somniaTestnetGroups,
    },
    groupTokens: {
      Story: storyGroupTokens,
      "MegaETH Testnet": megaethTestnetGroupTokens,
      "RISE Testnet": riseSepoliaGrouptokens,
      "Monad Testnet": monadTestnetGroupTokens,
      "Ink Sepolia": inkSepoliaGroupTokens,
      "Somnia Testnet": somniaTestnetGroupTokens,
    },
    groupPairs: {
      Story: storyGroupPairs,
      "MegaETH Testnet": megaethTestnetGroupPairs,
      "RISE Testnet": riseSepoliaGroupPairs,
      "Monad Testnet": monadTestnetGroupPairs,
      "Ink Sepolia": inkSepoliaGroupPairs,
      "Somnia Testnet": somniaTestnetGroupPairs,
    },
    scannerLink: {
      Story: "https://oklink.com/story/",
      "MegaETH Testnet": "https://web3.okx.com/explorer/megaeth-testnet/",
      "RISE Testnet": "https://testnet-explorer.riselabs.xyz/",
      "Monad Testnet": "https://testnet.monadexplorer.com/",
      "Ink Sepolia": "https://explorer-sepolia.inkonchain.com/",
      "Somnia Testnet": "https://shannon-explorer.somnia.network/",
    },
    matchingEngine: {
      "MegaETH Testnet": {
        address: "0xc5eE93Ec440c0825DF8332bA5fDe430E8B54b982",
        startBlock: 10385149,
      },
      "RISE Testnet": {
        address: "0x5799a9EA0264E6d7F0dBc5936E018A6e6c9991E0",
        startBlock: 16477652,
      },
      "Monad Testnet": {
        address: "0xc5c503d017a64478b91592dba4fde2ce42c753bb",
        startBlock: 24523816,
      },
      "Somnia Testnet": {
        address: "0xE01009e6F2F58C8Bb53b3Bc97061D2ce694bfEd0",
        startBlock: 113782440,
      },
    },
    wAIfuManager: {
      "RISE Testnet": {
        address: "0xcCF25DD59e7F556fd73DF21973d2dE6174186484",
        startBlock: 13223107,
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
      ...megaethTestnet,
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
      ...megaethTestnetPairs,
    ],
  };
  return l1List;
};
