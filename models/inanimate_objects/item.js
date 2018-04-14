const InanimateObject = require('./inanimate_object.js');

const Item = function(name, type, description, inspectText) {
  InanimateObject.call(this, description, inspectText);
  this.name = name;
  this.type = type;
}

Item.prototype = Object.create(InanimateObject.prototype);
Item.prototype.constructor = Item;


module.exports = Item;
