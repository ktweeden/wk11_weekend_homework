const InanimateObject = require('./inanimate_object.js');

const Food = function(name, replenishment, description, inspectText) {
  InanimateObject.call(this, description, inspectText);
  this.name = name;
  this.replenishmentValue = replenishment;
  this.isPoisonous = false;
}

Food.prototype = Object.create(InanimateObject.prototype);
Food.prototype.constructor = Food;

Food.prototype.makePoisonous = function () {
  this.isPoisonous = true;
};

module.exports = Food;
