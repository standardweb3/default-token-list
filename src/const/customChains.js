
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

module.exports =  { StoryIliad }