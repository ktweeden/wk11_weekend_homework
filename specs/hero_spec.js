const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');

describe('Hero tests', function() {
  let hero;
  let cheese;
  let blueberry_pie;
  let hardTask;
  let highRewardTask;
  let easyTask;
  let urgentTask;

  beforeEach(function() {
    hero = new Hero('Gregor the Grotesque', 150, 'Blueberry pie')
    cheese = new Food('cheese', 5);
    blueberry_pie = new Food('Blueberry pie', 2);
    hardTask = new Task(20, 2, 30);
    highRewardTask = new Task(4, 1, 100);
    easyTask = new Task(1, 5, 50);
    urgentTask = new Task(5, 10, 60);

  });

  it('Has a name', function() {
    assert.strictEqual(hero.name, 'Gregor the Grotesque');
  });

  it('Has a health', function() {
    assert.strictEqual(hero.health, 150);
  });

  it('Has a favourite food', function() {
    assert.strictEqual(hero.favourite_food, 'Blueberry pie');
  });

  it('Can speak', function() {
    assert.strictEqual(hero.speak(), 'Hello, I am Gregor the Grotesque');
  });

  it('Has a list of tasks to complete', function() {
    assert.deepStrictEqual(hero.tasks, []);
  });

  it('Can replenish health by eating food', function() {
    hero.eat(cheese);
    assert.strictEqual(hero.health, 155);
  });

  it('Can replenish health more by eating  favouritefood', function() {
    hero.eat(blueberry_pie);
    assert.strictEqual(hero.health, 153);
  });

  it('Can add new task', function() {
    hero.addTask(hardTask);
    assert.deepStrictEqual(hero.tasks, [hardTask]);
  })

  it('Can sort tasks by difficulty', function() {
    hero.addTask(hardTask);
    hero.addTask(highRewardTask);
    hero.addTask(easyTask);
    hero.addTask(urgentTask);
    hero.sortTasks('difficulty');
    expected = [hardTask, urgentTask, highRewardTask, easyTask];
    assert.deepStrictEqual(hero.tasks, expected);
  })

  it('Can sort tasks by urgency', function() {
    hero.addTask(hardTask);
    hero.addTask(highRewardTask);
    hero.addTask(easyTask);
    hero.addTask(urgentTask);
    hero.sortTasks('urgency');
    expected = [urgentTask, easyTask, hardTask, highRewardTask];
    assert.deepStrictEqual(hero.tasks, expected);
  })

  it('Can sort tasks by reward', function() {
    hero.addTask(hardTask);
    hero.addTask(highRewardTask);
    hero.addTask(easyTask);
    hero.addTask(urgentTask);
    hero.sortTasks('reward');
    expected = [highRewardTask, urgentTask, easyTask, hardTask];
    assert.deepStrictEqual(hero.tasks, expected);
  })

  it('Can get all completed tasks', function() {
    hero.addTask(hardTask);
    hero.addTask(highRewardTask);
    hero.addTask(easyTask);
    hero.addTask(urgentTask);
    hardTask.setComplete();
    expected = [hardTask];
    assert.deepStrictEqual(hero.completeTasks(), expected);
  })

  it('Can get all incomplete tasks', function() {
    hero.addTask(hardTask);
    hero.addTask(highRewardTask);
    hero.addTask(easyTask);
    hero.addTask(urgentTask);
    highRewardTask.setComplete();
    easyTask.setComplete();
    hardTask.setComplete();
    expected = [urgentTask];
    assert.deepStrictEqual(hero.incompleteTasks(), expected);
  })
})
