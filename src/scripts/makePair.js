const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pairs = ["ETH/USDC", "ETH/USDT", "WBTC/USDC", "WBTC/USDT", "WBTC/ETH"];

function readJSONFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
}

function findTokenData(tokens, symbol) {
  return tokens.find((token) => token.symbol === symbol);
}

function prompt(question, defaultValue = "0.1") {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer || defaultValue);
    });
  });
}

async function createPairObjects(tokens, pairs) {
  const pairObjects = [];

  for (const pair of pairs) {
    const [baseSymbol, quoteSymbol] = pair.split("/");
    const baseToken = findTokenData(tokens, baseSymbol);
    const quoteToken = findTokenData(tokens, quoteSymbol);

    if (baseToken && quoteToken) {
      const listing_price = await prompt(`Enter listing price for ${pair}: `);
      const buy_tick = await prompt(
        `Enter buy tick for ${pair} (default 0.1): `
      );
      const sell_tick = await prompt(
        `Enter sell tick for ${pair} (default 0.1): `
      );

      const uniqueTags = [...new Set([...baseToken.tag, ...quoteToken.tag])];

      const pairObject = {
        base: baseToken,
        quote: quoteToken,
        listing_price: parseFloat(listing_price),
        buy_tick: parseFloat(buy_tick),
        sell_tick: parseFloat(sell_tick),
        tag: uniqueTags,
      };

      pairObjects.push(pairObject);
    } else {
      console.error(`Token data not found for pair: ${pair}`);
    }
  }

  rl.close();
  return pairObjects;
}

function savePairObjects(pairObjects, inputFileName) {
  const outputFileName =
    path.basename(inputFileName, path.extname(inputFileName)) + ".json";
  const outputDir = path.join(__dirname, "../pairs");
  const outputPath = path.join(outputDir, outputFileName);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(pairObjects, null, 2), "utf-8");
  console.log(`Saved pair objects to ${outputPath}`);
}

async function main() {
    const rootDir = path.join(__dirname, '../../');
    const tokenFilePath = process.argv[2];
    if (!tokenFilePath) {
      console.error('Please provide the name of the JSON file as an argument.');
      process.exit(1);
    }
  
    const absoluteTokenFilePath = path.join(rootDir, 'src/tokens', tokenFilePath);
    if (!fs.existsSync(absoluteTokenFilePath)) {
      console.error(`File not found: ${absoluteTokenFilePath}`);
      process.exit(1);
    }

  const tokens = readJSONFile(absoluteTokenFilePath);
  const pairObjects = await createPairObjects(tokens, pairs);

  console.log("Generated pair objects:", JSON.stringify(pairObjects, null, 2));
  savePairObjects(pairObjects, absoluteTokenFilePath);
}

main();
