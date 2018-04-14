const Weapon = function(name, damage, attacksLeft, description, inspectText) {
  this.name = name;
  this.damage = damage;
  this.attacksLeft = attacksLeft;
  this.description = description;
  this.inspectText = inspectText;
}

Weapon.prototype.reduceAttacksLeft = function () {
  this.attacksLeft -= 1;
};

module.exports = Weapon;
