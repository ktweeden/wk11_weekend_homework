const Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.tasks = [];
}

Hero.prototype.speak = function () {
  return `Hello, I am ${this.name}`;
};

Hero.prototype.eat = function (food) {
  let food_value = food.replenishment_value;
  if(food.name === this.favourite_food) {
    food_value *= 1.5;
  }
  this.health += food_value;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.sortTasks = function (property) {
  this.tasks.sort((taskA, taskB) => {
    if(taskA[property] > taskB[property]) {
      return -1;
    }
    else if (taskA[property] < taskB[property]) {
      return 1;
    }

    else {
      return 0;
    }
  })
};

Hero.prototype.completeTasks = function () {
  return this.tasks.filter(task => task.completed === true);
};

Hero.prototype.incompleteTasks = function () {
  return this.tasks.filter(task => task.completed === false);
};

module.exports = Hero;
