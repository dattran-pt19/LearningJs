function Mouse(name, weight) {
	this.name = name;
	this.weight = weight;
	this.dead = false;
};

Mouse.prototype.die = function() {
	this.dead = true;
};

module.exports = Mouse;