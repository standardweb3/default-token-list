const { version } = require("../package.json");
const base = require("./tokens/base.json");
const kroma = require("./tokens/kroma.json");
const morphHolesky = require("./tokens/morph_holesky.json");
const metal = require("./tokens/metal.json");
const fraxtal = require("./tokens/fraxtal.json");
const mode = require("./tokens/mode.json");
const scroll = require("./tokens/scroll.json");
const neon = require("./tokens/neon.json");
const taiko = require("./tokens/taiko.json");
const storyIliad = require("./tokens/story_iliad.json");

// pairs
const basePairs = require("./pairs/base.json");
const kromaPairs = require("./pairs/kroma.json");
const morphHoleskyPairs = require("./pairs/morph_holesky.json");
const modePairs = require("./pairs/mode.json");
const metalPairs = require("./pairs/metal.json");
const fraxtalPairs = require("./pairs/fraxtal.json");
const scrollPairs = require("./pairs/scroll.json");
const neonPairs = require("./pairs/neon.json");
const taikoPairs = require("./pairs/taiko.json");
const storyIliadPairs = require("./pairs/story_iliad.json");

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
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        address: "0x5300000000000000000000000000000000000011",
        logoURI:
          "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/ETH.svg",
      },
      Mode: {
        chainId: 8453,
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        address: "0x4200000000000000000000000000000000000006",
        logoURI:
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      },
      Fraxtal: {
        chainId: 252,
        address: "0x4200000000000000000000000000000000000006",
        name: "Ether",
        symbol: "ETH",
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
      Scroll: {
        chainId: 534352,
        address: "0x5300000000000000000000000000000000000004",
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        logoURI:
          "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        extensions: {
          scrollListId: "default",
          scrollTokenId: "WETH",
        },
      },
      "Neon EVM MainNet": {
        chainId: 245022934,
        address: "0x202C35e517Fa803B537565c40F0a6965D7204609",
        decimals: 18,
        name: "Neon",
        symbol: "NEON",
        logoURI:
          "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-neon-logo.svg",
      },
      "Taiko Mainnet": {
        name: "Ether",
        address: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
        symbol: "ETH",
        decimals: 18,
        chainId: 167000,
        logoURI:
          "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
      },
      "Story Public Testnet": {
        "chainId": 1513,
        "address": "0x6e990040Fd9b06F98eFb62A147201696941680b5",
        "name": "IP",
        "symbol": "IP",
        "decimals": 18,
        "logoURI": "https://app.piperx.xyz/assets/icon_Story-0eb3cd42.png"
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
        base: {
          chainId: 252,
          address: "0xFc00000000000000000000000000000000000001",
          symbol: "FRAX",
          name: "Frax",
          decimals: 18,
          logoURI:
            "https://assets.coingecko.com/coins/images/13422/small/frax_logo.png?1608476506",
        },
        quote: {
          chainId: 252,
          address: "0x4200000000000000000000000000000000000006",
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
          logoURI:
            "https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png?1696527284",
        },
      },
      Metal: {
        base: {
          chainId: 1750,
          address: "0xBCFc435d8F276585f6431Fc1b9EE9A850B5C00A9",
          symbol: "MTL",
          name: "Metal",
          decimals: 8,
          logoURI:
            "https://assets.coingecko.com/coins/images/763/standard/Metal.png?1696501916",
        },
        quote: {
          chainId: 1750,
          address: "0x4200000000000000000000000000000000000006",
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
          logoURI:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        },
      },
      Scroll: {
        base: {
          chainId: 534352,
          address: "0x5300000000000000000000000000000000000004",
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
          logoURI:
            "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          extensions: {
            scrollListId: "default",
            scrollTokenId: "WETH",
          },
        },
        quote: {
          chainId: 534352,
          address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
          name: "USD Coin",
          symbol: "USDC",
          decimals: 6,
          logoURI:
            "https://scroll-tech.github.io/token-list/data/USDC/logo.svg",
          extensions: {
            scrollListId: "default",
            scrollTokenId: "USDC",
          },
        },
      },
      "Neon EVM MainNet": {
        base: {
          chainId: 245022934,
          address: "0x202C35e517Fa803B537565c40F0a6965D7204609",
          decimals: 18,
          name: "Neon",
          symbol: "NEON",
          logoURI:
            "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-neon-logo.svg",
        },
        quote: {
          chainId: 245022934,
          address_spl: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          address: "0x5f0155d08eF4aaE2B500AefB64A3419dA8bB611a",
          decimals: 6,
          name: "USDT",
          symbol: "USDT",
          logoURI:
            "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/tether-usdt-logo.svg",
        },
      },
      "Taiko Mainnet": {
        base: {
          name: "Ether",
          address: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
          symbol: "ETH",
          decimals: 18,
          chainId: 167000,
          logoURI:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
        },
        quote: {
          chainId: 167000,
          address: "0x7d02A3E0180451B17e5D7f29eF78d06F8117106C",
          symbol: "DAI",
          name: "Dai Stablecoin",
          decimals: 18,
          logoURI:
            "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
        },
      },
      "Story Public Testnet": {
        "base": {
          "chainId": 1513,
          "address": "0x6e990040Fd9b06F98eFb62A147201696941680b5",
          "name": "IP",
          "symbol": "IP",
          "decimals": 18,
          "logoURI": "https://app.piperx.xyz/assets/icon_Story-0eb3cd42.png"
        },
        "quote": {
          "chainId": 1513,
          "address": "0x700722D24f9256Be288f56449E8AB1D27C4a70ca",
          "name": "USD Coin",
          "symbol": "USDC",
          "decimals": 6,
          "logoURI": "https://ethereum-optimism.github.io/data/USDC/logo.png"
        }
      }
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
      "Story Public Testnet": "https://testnet.storyrpc.io/",
    },
    matchingEngine: {
      Base: {
        address: "0x97FaA5289DCB12ecE5f553D84A3eEb294914D221",
        startBlock: 18894099,
      },
      Kroma: {
        address: "0x353195Aa4A75069629B863012518E4c40a1198A5",
        startBlock: 15349021,
      },
      "Morph Holesky": {
        address: "0x1abC5dcEb0296601c9f800137b1bA5A60cBaB538",
        startBlock: 7033411,
      },
      Mode: {
        address: "0x959245EA66ac26caF38B8Eb9d48418c6B7Aa621D",
        startBlock: 11698902,
      },
      Fraxtal: {
        address: "0x959245EA66ac26caF38B8Eb9d48418c6B7Aa621D",
        startBlock: 8354873,
      },
      Metal: {
        address: "0x959245EA66ac26caF38B8Eb9d48418c6B7Aa621D",
        startBlock: 6513267,
      },
      Scroll: {
        address: "0x3828a06c0D78e33e77d4B8B1c9B16c1214C3071B",
        startBlock: 8849622,
      },
      "Neon EVM MainNet": {
        address: "0xd7ABA1cbAd246249be6a0de9a449FB5EDEFf1E47",
        startBlock: 286654632,
      },
      "Taiko Mainnet": {
        address: "0xd7ABA1cbAd246249be6a0de9a449FB5EDEFf1E47",
        startBlock: 342912,
      },
      "Story Public Testnet": {
        address: "0xd7ABA1cbAd246249be6a0de9a449FB5EDEFf1E47",
        startBlock: 217636,
      }
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
      Mode: {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
      Fraxtal: {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
      Metal: {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
      Scroll: {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
      "Neon EVM MainNet": {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
      "Taiko Mainnet": {
        address: "0xEA98008F20e06636470b6a3C7ddA9caE63B668EC",
        startBlock: 5389919,
      },
      "Story Public Testnet": {
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
      ...modePairs,
      ...fraxtalPairs,
      ...metalPairs,
      ...scrollPairs,
      ...neonPairs,
      ...taikoPairs,
      ...storyIliadPairs
    ],
    tokens: [
      ...base,
      ...kroma,
      ...morphHolesky,
      ...mode,
      ...fraxtal,
      ...metal,
      ...scroll,
      ...neon,
      ...taiko,
      ...storyIliad,
    ]
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
