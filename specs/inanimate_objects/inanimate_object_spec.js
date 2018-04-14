const assert = require('assert');
const InanimateObject = require('../../models/inanimate_objects/inanimate_object.js');

describe('InanimateObject tests', function() {
  let inanimateObject;

  beforeEach(function() {
    inanimateObject = new InanimateObject('some description', 'some inspect text');
  });

  it('has a description', function() {
    assert.strictEqual(inanimateObject.description, 'some description');
  });

  it('has a inspect text', function() {
    assert.strictEqual(inanimateObject.inspectText, 'some inspect text');
  });

})
