var Cat = require('./cat');
var Mouse = require('./mouse');

var tom = new Cat();
var jerry = new Mouse('Jerry', 2);
var mickey = new Mouse('Mickey', 13);


tom.eat(jerry);
console.log(tom);