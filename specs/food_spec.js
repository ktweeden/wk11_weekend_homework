const assert = require('assert');
const Food = require('../models/food.js');

describe('Food tests', function() {
  let food;

  beforeEach(function() {
    food = new Food('Cheese', 10);
  })

  it('Has a name', function() {
    assert.strictEqual(food.name, 'Cheese');
  });

  it('Has a replenishment level', function() {
    assert.strictEqual(food.replenishment_value, 10);
  });
})
