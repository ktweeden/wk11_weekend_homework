const Hero = function(name, health, faveourite_food) {
  this.name = name;
  this.health = health;
  this.faveourite_food = faveourite_food;
  this.tasks = [];
}

Hero.prototype.speak = function () {
  return `Hello, I am ${this.name}`;
};

module.exports = Hero;
