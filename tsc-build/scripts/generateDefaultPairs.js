var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// replace path with path to desired network tokenlist
const tokenlist = require("../tokens/story_iliad.json");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function getCoinPrice(coinId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sleep(1000);
            const response = yield fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            const price = data[coinId].usd;
            console.log(`The current price of ${coinId} is $${price}`);
            return price;
        }
        catch (error) {
            console.error("Error fetching coin price:", error.message);
        }
    });
}
function adddefaultPairs() {
    return __awaiter(this, void 0, void 0, function* () {
        const stablecoin2 = tokenlist.find((token) => token.symbol === "USDT");
        const stablecoin = tokenlist.find((token) => token.symbol === "USDC");
        const eth = tokenlist.find((token) => token.symbol === "IP");
        const remainingTokens = tokenlist.filter((token) => token.address !== stablecoin.address &&
            token.address !== eth.address &&
            token.address !== stablecoin2.address);
        const defaultPairs = [];
        for (const token of remainingTokens) {
            defaultPairs.push({
                base: {
                    chainId: token.chainId,
                    address: token.address,
                    symbol: token.symbol,
                    name: token.name,
                    decimals: token.decimals,
                    logoURI: token.logoURI,
                },
                quote: eth,
                listing_price: 0,
            });
            defaultPairs.push({
                base: {
                    chainId: token.chainId,
                    address: token.address,
                    symbol: token.symbol,
                    name: token.name,
                    decimals: token.decimals,
                    logoURI: token.logoURI,
                },
                quote: stablecoin,
                listing_price: 0,
            });
            defaultPairs.push({
                base: {
                    chainId: token.chainId,
                    address: token.address,
                    symbol: token.symbol,
                    name: token.name,
                    decimals: token.decimals,
                    logoURI: token.logoURI,
                },
                quote: stablecoin2,
                listing_price: 0,
            });
        }
        console.log(JSON.stringify(defaultPairs, null, 2));
    });
}
adddefaultPairs();
