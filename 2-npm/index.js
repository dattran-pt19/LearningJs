var readlineSync = require('readline-sync');

var languages = [];

var language = readlineSync.question('Enter your favourite language? ');
var isHard = readlineSync.question('It is hard? ');
languages.push({name: language, isHard: isHard});

console.log(languages);