const fs = require('fs');
const data = require('./data');

const jsonString = JSON.stringify(data, null, 2);

fs.writeFileSync('output.json', jsonString);
