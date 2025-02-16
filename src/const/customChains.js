const { defineChain } = require("viem");

const RiseSepolia = defineChain({
  id: 11155931,
  name: "Rise Sepolia",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://testnet.riselabs.xyz/"] },
    default: {
      http: ["https://testnet.riselabs.xyz/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "RiseSepolia Scan",
      url: "https://testnet-explorer.riselabs.xyz",
    },
    default: {
      name: "RiseSepolia Scan",
      url: "https://testnet-explorer.riselabs.xyz",
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0x33f6552F37772e42A31d03233812d2dC6afd2f97",
      blockCreated: 457931,
    },
  },
});

const Story = defineChain({
  id: 1514,
  name: "Story",
  nativeCurrency: { name: "IP", symbol: "IP", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://rpc.mainnet.storyrpc.io/"] },
    default: {
      http: ["https://rpc.mainnet.storyrpc.io/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "OKlink Scan Story",
      url: "https://www.oklink.com/story",
    },
    default: {
      name: "OKlink Scan Story",
      url: "https://www.oklink.com/story",
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0x959245ea66ac26caf38b8eb9d48418c6b7aa621d",
      blockCreated: 877456,
    },
  },
});

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



module.exports = { StoryOdyssey, StoryIliad, Morph, Story, RiseSepolia };
