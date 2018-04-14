const InanimateObject = require('./inanimate_object.js');

const Weapon = function(name, damage, attacksLeft, description, inspectText) {
  InanimateObject.call(this, description, inspectText);
  this.name = name;
  this.damage = damage;
  this.attacksLeft = attacksLeft;
}

Weapon.prototype = Object.create(InanimateObject.prototype);
Weapon.prototype.constructor = Weapon;

Weapon.prototype.reduceAttacksLeft = function () {
  this.attacksLeft -= 1;
};

module.exports = Weapon;
