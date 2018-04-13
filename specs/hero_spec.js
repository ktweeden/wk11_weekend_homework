const assert = require('assert');
const Hero = require('../models/hero.js');

describe('Hero tests', function() {
  let hero;

  beforeEach(function() {
    hero = new Hero('Gregor the Grotesque', 150, 'Blueberry pie')
  });

  it('Has a name', function() {
    assert.strictEqual(hero.name, 'Gregor the Grotesque');
  });

  it('Has a health', function() {
    assert.strictEqual(hero.health, 150);
  });

  it('Has a faveourite food', function() {
    assert.strictEqual(hero.faveourite_food, 'Blueberry pie');
  });

  it('Can speak', function() {
    assert.strictEqual(hero.speak(), 'Hello, I am Gregor the Grotesque');
  })

  it('Has a list of tasks to complete', function() {
    assert.deepStrictEqual(hero.tasks, []);
  })
})
