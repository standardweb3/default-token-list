const fs = require('node:fs');
const path = require('node:path');

function openFiles(argument) {
  const rootDir = path.join(__dirname, '../../');
  const directories = ['src/groups', 'src/pairs', 'src/tokens'];
  const results = [];

  for (const directory of directories) {
    const dirPath = path.join(rootDir, directory);
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      if (file.includes(argument)) {
        const filePath = path.join(dirPath, file);
        console.log(`Opening file: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf-8');
        const jsonContent = JSON.parse(content);
        results.push({ filePath, content: jsonContent });
      }
    }
  }

  return results;
}

function saveFiles(directory, filename, jsonContent) {
  const dirPath = path.join(__dirname, '../../', directory);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, filename);
  fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 2), 'utf-8');
  console.log(`Saved file: ${filePath}`);
}

function group(groups, assets) {
  // on each group, find each asset's tag property and group them together
  const groupedAssets = {};
  for (const group of Object.keys(groups)) {
    console.log(`Grouping assets for ${group}`);
    const groupAssets = assets.filter((asset) => asset.tag.includes(group));
    groupedAssets[group] = groupAssets;
  }
  return groupedAssets;
}

function main(argument) {
  const [groups, pairs, tokens] = openFiles(argument);
  console.log('Groups:', groups);
  console.log('Pairs:', pairs);
  console.log('Tokens:', tokens);
  // now group tokens by group
  const groupedTokens = group(groups.content, tokens.content);
  // now group pairs by group
  const groupedPairs = group(groups.content, pairs.content);

  saveFiles('src/groupPairs', argument, groupedPairs);
  saveFiles('src/groupTokens', argument, groupedTokens);
}

const argument = process.argv[2];
if (!argument) {
  console.error('Please provide an argument for chain. example: ethereum.json');
  process.exit(1);
}
if (!argument.includes('.json')) {
  console.error('Please provide a valid json file. example: ethereum.json');
  process.exit(1);
}

main(argument);

