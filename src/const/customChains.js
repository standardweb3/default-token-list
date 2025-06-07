const { defineChain } = require("viem");

const SomniaTestnet = defineChain({
  id: 50312,
  name: "Somnia Testnet",
  nativeCurrency: { name: "STT", symbol: "STT", decimals: 18 },
  rpcUrls: {
    public: {
      http: [
        "https://rpc.ankr.com/somnia_testnet/6e3fd81558cf77b928b06b38e9409b4677b637118114e83364486294d5ff4811",
      ],
    },
    default: {
      http: [
        "https://rpc.ankr.com/somnia_testnet/6e3fd81558cf77b928b06b38e9409b4677b637118114e83364486294d5ff4811",
      ],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Somnia Testnet Explorer",
      url: "https://shannon-explorer.somnia.network/",
    },
    default: {
      name: "Somnia Testnet Explorer",
      url: "https://shannon-explorer.somnia.network/",
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xC55dc745240DD91aD9BD927a346aF73428568A85",
      blockCreated: 53583742,
    },
  },
});

const InkSepolia = defineChain({
  id: 763373,
  name: "Ink Sepolia",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://rpc-gel-sepolia.inkonchain.com/"] },
    default: {
      http: ["https://rpc-gel-sepolia.inkonchain.com/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Ink Sepolia Scan",
      url: "https://explorer-sepolia.inkonchain.com/",
    },
    default: {
      name: "Ink Sepolia Scan",
      url: "https://explorer-sepolia.inkonchain.com/",
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

const MonadTestnet = defineChain({
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://testnet-rpc.monad.xyz"] },
    default: {
      http: ["https://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Monad Testnet Explorer",
      url: "https://testnet-explorer.riselabs.xyz",
    },
    default: {
      name: "Monad Testnet Explorer",
      url: "https://testnet.monadexplorer.com/",
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 251449,
    },
  },
});

const RiseSepolia = defineChain({
  id: 11155931,
  name: "RISE Testnet",
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
      blockCreated: 52602,
    },
  },
});

module.exports = {
  StoryOdyssey,
  StoryIliad,
  Morph,
  Story,
  RiseSepolia,
  MonadTestnet,
  InkSepolia,
  SomniaTestnet,
};
