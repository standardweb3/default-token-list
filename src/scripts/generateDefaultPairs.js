// replace path with path to desired network tokenlist
const tokenlist = require("../tokens/kroma.json");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCoinPrice(coinId) {
  try {
    await sleep(1000);
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const price = data[coinId].usd;
    console.log(`The current price of ${coinId} is $${price}`);
    return price;
  } catch (error) {
    console.error("Error fetching coin price:", error.message);
  }
}

async function adddefaultPairs() {
  const stablecoin2 = tokenlist.find((token) => token.symbol === "USDT");
  const stablecoin = tokenlist.find((token) => token.symbol === "USDC");
  const eth = tokenlist.find((token) => token.symbol === "ETH");

  const remainingTokens = tokenlist.filter(
    (token) =>
      token.address !== stablecoin.address &&
      token.address !== eth.address &&
      token.address !== stablecoin2.address
  );

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
}

adddefaultPairs();
