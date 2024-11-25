const { defineChain } = require("viem");

const StoryIliad = defineChain({
  id: 1513,
  name: "Story Public Testnet",
  nativeCurrency: { name: "IP", symbol: "IP", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://testnet.storyrpc.io/"] },
    default: {
      http: ["https://testnet.storyrpc.io/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Story Testnet Scan",
      url: "https://testnet.storyscan.xyz",
    },
    default: {
      name: "Story Testnet Scan",
      url: "https://testnet.storyscan.xyz",
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1566,
    },
  },
});

const StoryOdyssey = defineChain({
  id: 1516,
  name: "Story Odyssey Testnet",
  nativeCurrency: { name: "IP", symbol: "IP", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://rpc.odyssey.storyrpc.io/"] },
    default: {
      http: ["https://rpc.odyssey.storyrpc.io/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Story Odyssey Testnet Scan",
      url: "https://odyssey-testnet-explorer.storyscan.xyz/",
    },
    default: {
      name: "Story Odyssey Testnet Scan",
      url: "https://odyssey-testnet-explorer.storyscan.xyz/",
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14880,
    },
  },
});

const Morph = defineChain({
  id: 2818,
  name: "Morph",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://rpc.morphl2.io"] },
    default: {
      http: ["https://rpc.morphl2.io"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Morph Scan",
      url: "https://explorer.morphl2.io",
    },
    default: {
      name: "Morph Scan",
      url: "https://explorer.morphl2.io",
    },
  },
  testnet: false,
  contracts: {
    multicall3: {
      address: "0x35f965903A85e7528437C3Ce0b4bdfbc4E5Fc27c",
      blockCreated: 
      52602,
    },
  },
})

module.exports = { StoryOdyssey, StoryIliad, Morph };
