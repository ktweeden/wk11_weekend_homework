const Inventory = function() {
  this.food = [];
  this.weapons = [];
  this.items = [];
}

Inventory.prototype.addFood = function (food) {
  this.food.push(food);
};

Inventory.prototype.removeFood = function (food) {
  const index = this.food.indexOf(food);
  if(index != -1) {
    this.food.splice(index, 1);
  }
};

Inventory.prototype.addWeapon = function (weapon) {
  this.weapons.push(weapon);
};

Inventory.prototype.removeWeapon = function (weapon) {
  const index = this.weapons.indexOf(weapon);
  if(index != -1) {
    this.weapons.splice(index, 1);
  }
};

Inventory.prototype.addItem = function (item) {
  this.items.push(item);
};

Inventory.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if(index != -1) {
    this.items.splice(index, 1);
  }
};

module.exports = Inventory;
