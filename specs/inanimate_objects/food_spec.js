const assert = require('assert');
const Food = require('../../models/inanimate_objects/food.js');

describe('Food tests', function() {
  let food;

  beforeEach(function() {
    food = new Food('Cheese', 10, 'Some cheese', '...');
  })

  it('Has a name', function() {
    assert.strictEqual(food.name, 'Cheese');
  });

  it('Has a replenishment level', function() {
    assert.strictEqual(food.replenishmentValue, 10);
  });

  it('Has no poison when created', function() {
    assert.strictEqual(food.isPoisonous, false);
  });

  it('Has a description', function() {
    assert.strictEqual(food.description, 'Some cheese');
  });

  it('Has an inspectText', function() {
    assert.strictEqual(food.inspectText, '...');
  });

  it('Can be made poisonous', function() {
    food.makePoisonous();
    assert.strictEqual(food.isPoisonous, true);
  });
})
