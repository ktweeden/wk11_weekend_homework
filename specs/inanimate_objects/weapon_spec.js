const assert = require('assert');
const Weapon = require('../../models/inanimate_objects/weapon.js');

describe('Weapon tests', function() {
  let legOfHam;
  let plank;

  beforeEach(function() {
    legOfHam = new Weapon('Leg of Ham', 3, 10, 'A leg. Of Ham', "The ham does nothing. It's ham.");
    plank = new Weapon('Plank', 2, 10, 'A short plank of hardwood, around one foot in length. Even unvarnished it has a beautiful grain', '...');
  });

  it('Has a name', function() {
    assert.strictEqual(legOfHam.name, 'Leg of Ham');
  });

  it('Has a damage amount', function() {
    assert.strictEqual(legOfHam.damage, 3);
  });

  it('Has a number of attacks left', function() {
    assert.strictEqual(legOfHam.attacksLeft, 10);
  });

  it('Can reduce number of attacks left', function() {
    plank.reduceAttacksLeft();
    assert.strictEqual(plank.attacksLeft, 9);
  });

  it('Has a description', function() {
    assert.strictEqual(plank.description, 'A short plank of hardwood, around one foot in length. Even unvarnished it has a beautiful grain');
  });

  it('Has a inspectText', function() {
    assert.strictEqual(plank.inspectText, '...');
  });
});
