const Rat = function() {

}

Rat.prototype.touch = function (food) {
  food.makePoisonous();
};

module.exports = Rat;
