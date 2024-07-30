const morphHolesky = require("../tokens/morph_holesky.json")



function addETHUSDTPairs() {
    const usdt = morphHolesky.find((token) => token.symbol === "USDT");
    const eth = morphHolesky.find((token) => token.symbol === "ETH");

    const remainingTokens = morphHolesky.filter((token) => token.address !== usdt.address && token.address !== eth.address);


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
            "quote": usdt,
            "listing_price": 0.
        })
    }

    console.log(JSON.stringify(ETHUSDTPairs, null, 2));
}

addETHUSDTPairs()