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

// pairs
const basePairs = require("./pairs/base.json");
const kromaPairs = require("./pairs/kroma.json");
const morphHoleskyPairs = require("./pairs/morph_holesky.json");

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
      MorphHolesky: {
        name: "Ethereum Token",
        symbol: "ETH",
        decimals: 18,
        address: "0x0000000000000000000000000000000000000000",
        logoURI:
          "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/ETH.svg",
      },
    },
    defaultPair: {
      Base: {
        base: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
          address: "0x4200000000000000000000000000000000000006",
          logoURI:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        },
        quote: {
          name: "USD Coin",
          symbol: "USDC",
          decimals: 6,
          address: "0x0257e4d92C00C9EfcCa1d641b224d7d09cfa4522",
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
      MorphHolesky: {
        base: {
          chainId: 2810,
          address: "0x0000000000000000000000000000000000000000",
          symbol: "ETH",
          name: "Ethereum Token",
          decimals: 18,
          logoURI:
            "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/ETH.svg",
        },
        quote: {
          chainId: 2810,
          address: "0x64c76ccc33969cA1414EEE0Da3713C4203E9ba2D",
          symbol: "DAI",
          name: "Dai",
          decimals: 18,
          logoURI:
            "https://raw.githubusercontent.com/morph-l2/morph-list/main/tokenIcons/DAI.svg",
        },
      },
    },
    scannerLink: {
      Base: "https://basescan.org",
      Kroma: "https://kromascan.com",
      MorphHolesky: "https://explorer-testnet.morphl2.io",
    },
    matchingEngine: {
      Base: "0xd7ABA1cbAd246249be6a0de9a449FB5EDEFf1E47",
      Kroma: "0xd7ABA1cbAd246249be6a0de9a449FB5EDEFf1E47",
      MorphHolesky: "0x0AdBf7ec00A03BE9d5556Adb2600e2552029C63c",
    },
    tags: {},
    logoURI: "https://avatars.githubusercontent.com/u/73440097?s=200&v=4",
    keywords: ["standard", "default"],
    pairs: [...basePairs, ...kromaPairs, ...morphHoleskyPairs],
    tokens: [...base, ...kroma, ...morphHolesky]
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
