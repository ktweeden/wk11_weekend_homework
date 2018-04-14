const assert = require('assert');
const Inventory = require('../models/inventory.js');
const Food = require('../models/inanimate_objects/food.js');
const Weapon = require('../models/inanimate_objects/weapon.js');

describe('Inventory Tasks', function() {
  let inventory;
  let food;
  let food2;
  let plank;

  beforeEach(function() {
    inventory = new Inventory();
    food = new Food('Brie', 10);
    food2 = new Food('Ham', 5);
    plank = new Weapon('Plank', 2, 10, 'A short plank of hardwood, around one foot in length. Even unvarnished it has a beautiful grain', '...');
  })

  it('Has a list of foods', function() {
    assert.deepStrictEqual(inventory.food, []);
  })

  it('Has a list of weapons', function() {
    assert.deepStrictEqual(inventory.weapons, []);
  })

  it('Has a list of items', function() {
    assert.deepStrictEqual(inventory.items, []);
  })

  it('Can add a food', function() {
    inventory.addFood(food);
    assert.deepStrictEqual(inventory.food, [food]);
  });

  it('Can remove a food', function() {
    inventory.addFood(food);
    inventory.removeFood(food);
    assert.deepStrictEqual(inventory.food, []);
  });

  it('Trying to remove a food that does not exist wont break', function() {
    inventory.addFood(food);
    inventory.removeFood(food2);
    assert.deepStrictEqual(inventory.food, [food]);
  });

  it('Can add a weapon', function() {
    inventory.addWeapon(plank);
    assert.deepStrictEqual(inventory.weapons, [plank]);
  });

  it('Can remove a weapon', function() {
    inventory.addWeapon(plank);
    inventory.removeWeapon(plank);
    assert.deepStrictEqual(inventory.weapons, []);
  });

})
