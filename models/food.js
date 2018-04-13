const Food = function(name, replenishment) {
  this.name = name;
  this.replenishment_value = replenishment;
  this.isPoisonous = false;
}

Food.prototype.makePoisonous = function () {
  this.isPoisonous = true;
};

module.exports = Food;
