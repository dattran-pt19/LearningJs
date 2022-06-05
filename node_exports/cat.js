function Cat() {
	this.weight = 0;
	this.stomach = [];
};

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	this.weight += mouse.weight;
	mouse.die();
};

module.exports = Cat;