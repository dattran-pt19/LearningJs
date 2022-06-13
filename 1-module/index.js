var fs = require('fs');

var text = fs.readFileSync('./song1.txt', { encoding: 'utf8' });

fs.writeFileSync('./song2.txt', 'Hello 500 ae nhe');

console.log(text);