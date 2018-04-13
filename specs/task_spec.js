const assert = require('assert');
const Task = require('../models/task.js');

describe('Task tests', function() {
  let taskA;

  beforeEach(function() {
    taskA = new Task(5, 10, 100);
  })

  it('Has a difficulty level', function() {
    assert.strictEqual(taskA.difficulty, 5);
  });

  it('Has an urgency level', function() {
    assert.strictEqual(taskA.urgency, 10);
  });

  it('Has a reward', function() {
    assert.strictEqual(taskA.reward, 100);
  });

  it('Begins as incomplete', function() {
    assert.strictEqual(taskA.completed, false);
  });

  if('Can set task as complete', function() {
    taskA.setComplete();
    assert.strictEqual(taskA.completed, true);
  });
})
