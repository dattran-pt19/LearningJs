var fs = require('fs');

console.log('Start');

// var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8' });
// console.log(song1);
// var song2 = fs.readFileSync('song2.txt', { encoding: 'utf8' });
// console.log(song2);

var song1 = fs.readFile('song1.txt', { encoding: 'utf8' }, function(err, data) {
	console.log(data);
});

console.log('End');
