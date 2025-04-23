const buildList = require('./buildList');

const list = buildList()
console.log(JSON.stringify(list, null, 2));