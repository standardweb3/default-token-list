// replace path with path to desired network tokenlist
const tokenlist = require("../tokens/metal.json")



function addETHUSDTPairs() {
    const stablecoin = tokenlist.find((token) => token.symbol === "USDC");
    const eth = tokenlist.find((token) => token.symbol === "ETH");

    const remainingTokens = tokenlist.filter((token) => token.address !== stablecoin.address && token.address !== eth.address);


    const ETHUSDTPairs = [];

    for (const token of remainingTokens) {
        ETHUSDTPairs.push({
            "base": {
                "chainId": token.chainId,
                "address": token.address,
                "symbol": token.symbol,
                "name": token.name,
                "decimals": token.decimals,
                "logoURI": token.logoURI
            },
            "quote": eth,
            "listing_price": 0.
        })
        ETHUSDTPairs.push({
            "base": {
                "chainId": token.chainId,
                "address": token.address,
                "symbol": token.symbol,
                "name": token.name,
                "decimals": token.decimals,
                "logoURI": token.logoURI
            },
            "quote": stablecoin,
            "listing_price": 0.
        })
    }

    console.log(JSON.stringify(ETHUSDTPairs, null, 2));
}

addETHUSDTPairs()