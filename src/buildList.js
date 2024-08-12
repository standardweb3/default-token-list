const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const polygon = require("./tokens/polygon.json");
const mumbai = require("./tokens/mumbai.json");
const optimism = require("./tokens/optimism.json");
const celo = require("./tokens/celo.json");
const arbitrum = require("./tokens/arbitrum.json");
const bnb = require("./tokens/bnb.json");
const sepolia = require("./tokens/sepolia.json");
const avalanche = require("./tokens/avalanche.json");
const base = require("./tokens/base.json");
const blast = require("./tokens/blast.json");
const kroma = require("./tokens/kroma.json");
const morphHolesky = require("./tokens/morph_holesky.json");
const metal = require("./tokens/metal.json");
const fraxtal = require("./tokens/fraxtal.json");

// pairs
const basePairs = require("./pairs/base.json");
const kromaPairs = require("./pairs/kroma.json");
const morphHoleskyPairs = require("./pairs/morph_holesky.json");
const metalPairs = require("./pairs/metal.json");
const fraxtalPairs = require("./pairs/fraxtal.json");

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
    nativeToken: {
      Base: {
        chainId: 8453,
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        address: "0x4200000000000000000000000000000000000006",
        logoURI:
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      },
      Kroma: {
        name: "Wrapped Ether",
        symbol: "ETH",
        decimals: 18,
        address: "0x4200000000000000000000000000000000000001",
        logoURI:
          "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      },
      "Morph Holesky": {
        name: "Ethereum Token",
        symbol: "ETH",
        decimals: 18,
        address: "0x5300000000000000000000000000000000000011",
        logoURI:
          "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/ETH.svg",
      },
      Fraxtal: {
        chainId: 252,
        address: "0xFC00000000000000000000000000000000000006",
        name: "Frax Ether",
        symbol: "FRXETH",
        decimals: 18,
        logoURI:
          "https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png?1696527284",
      },
      Metal: {
        chainId: 1750,
        address: "0x4200000000000000000000000000000000000006",
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        logoURI:
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      },
    },
    defaultPair: {
      Base: {
        base: {
          chainId: 8453,
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
          address: "0x4200000000000000000000000000000000000006",
          logoURI:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        },
        quote: {
          chainId: 8453,
          name: "USD Coin",
          symbol: "USDC",
          decimals: 6,
          address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          logoURI: "https://ethereum-optimism.github.io/data/USDC/logo.png",
        },
      },
      Kroma: {
        base: {
          chainId: 255,
          name: "Wrapped Ether",
          symbol: "ETH",
          address: "0x4200000000000000000000000000000000000001",
          logoURI:
            "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          decimals: 18,
        },
        quote: {
          chainId: 255,
          name: "Tether",
          symbol: "USDT",
          address: "0x0Cf7c2A584988871b654Bd79f96899e4cd6C41C0",
          logoURI: "https://ethereum-optimism.github.io/data/USDT/logo.png",
          decimals: 6,
        },
      },
      "Morph Holesky": {
        base: {
          chainId: 2810,
          address: "0x5300000000000000000000000000000000000011",
          symbol: "ETH",
          name: "Ethereum Token",
          decimals: 18,
          logoURI:
            "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/ETH.svg",
        },
        quote: {
          chainId: 2810,
          address: "0x9E12AD42c4E4d2acFBADE01a96446e48e6764B98",
          symbol: "USDT",
          name: "Tether",
          decimals: 18,
          logoURI:
            "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/USDT.svg",
        },
      },
      Fraxtal: {
        "base": {
          "chainId": 252,
          "address": "0xFc00000000000000000000000000000000000001",
          "symbol": "FRAX",
          "name": "Frax",
          "decimals": 18,
          "logoURI": "https://assets.coingecko.com/coins/images/13422/small/frax_logo.png?1608476506"
        },
        "quote": {
          "chainId": 252,
          "address": "0xFC00000000000000000000000000000000000006",
          "name": "Frax Ether",
          "symbol": "FRXETH",
          "decimals": 18,
          "logoURI": "https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png?1696527284"
        }
      },
      Metal: {
        "base": {
          "chainId": 1750,
          "address": "0xBCFc435d8F276585f6431Fc1b9EE9A850B5C00A9",
          "symbol": "MTL",
          "name": "Metal",
          "decimals": 8,
          "logoURI": "https://assets.coingecko.com/coins/images/763/standard/Metal.png?1696501916"
        },
        "quote": {
          "chainId": 1750,
          "address": "0x4200000000000000000000000000000000000006",
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18,
          "logoURI": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        },
      }
    },
    scannerLink: {
      Base: "https://basescan.org",
      Kroma: "https://kromascan.com",
      "Morph Holesky": "https://explorer-holesky.morphl2.io/",
      Fraxtal: "https://fraxscan.com/",
      Metal: "https://metalscan.io/",
    },
    matchingEngine: {
      Base: {
        address: "0x808D8b45B310646c7e1752C7bc3C68581533FfaA",
        startBlock: 18293005,
      },
      Kroma: {
        address: "0x64aa8360dcb9CA4c641D7118ccEd9B56D7546Ca8",
        startBlock: 14747553,
      },
      "Morph Holesky": {
        address: "0x738339C9d3EaEb0e6FD552Ec4Aba18bB6BD94B40",
        startBlock: 5960170,
      },
    },
    stndxp: {
      Base: {
        address: "0xb10a2AceC87757d7C8801dD6d0E194F00B9be7d2",
        startBlock: 17951815,
      },
      Kroma: {
        address: "0xdd2D72Ccdf83dB18B83ba487E0ebCB52e75B9c6f",
        startBlock: 14395927,
      },
      "Morph Holesky": {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
    },
    tags: {},
    logoURI: "https://avatars.githubusercontent.com/u/73440097?s=200&v=4",
    keywords: ["standard", "default"],
    pairs: [
      ...basePairs,
      ...kromaPairs,
      ...morphHoleskyPairs,
      ...fraxtalPairs,
      ...metalPairs,
    ],
    tokens: [...base, ...kroma, ...morphHolesky, ...fraxtal, ...metal]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return bridgeUtils.chainify(l1List);
};
