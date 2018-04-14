const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.speak = function () {
  return `Hello, I am ${this.name}`;
};

Hero.prototype.eat = function (food) {
  let foodValue = food.replenishmentValue;

  if(food.name === this.favouriteFood && food.isPoisonous === false) {
    foodValue *= 1.5;
    this.health += foodValue;
  }
  else if(food.isPoisonous) {
    this.health -= foodValue;
  }
  else {
    this.health += foodValue;
  }
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
