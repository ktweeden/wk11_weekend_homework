const assert = require('assert');
const Rat = require('../models/rat.js');
const Food = require('../models/inanimate_objects/food.js');

describe('Rat test', function() {

  let rat;
  let cheese;

  beforeEach(function() {
    rat = new Rat();
    cheese = new Food('cheese', 10);
  });

  it('can touch food and make poisonous', function() {
    rat.touch(cheese);
    assert.strictEqual(cheese.isPoisonous, true);
  });

})
