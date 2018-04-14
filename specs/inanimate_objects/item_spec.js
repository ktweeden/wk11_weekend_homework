const assert = require('assert');
const Item = require('../../models/inanimate_objects/item.js');

describe('Item tests', function() {
  let amulet

  beforeEach(function() {
    amulet = new Item(
      'Amulet of Doom',
      'magic',
      'A heavy, tarnished necklace containing a deep purple amethyst. The amulet has a faint aura of foreboding',
      'The amulet shudders and smoke begins to seep out from behind the jewel'
    );
  });

  it('Has a name', function() {
    assert.strictEqual(amulet.name, 'Amulet of Doom');
  });

  it('Has a type', function() {
    assert.strictEqual(amulet.type, 'magic');
  });

  it('Has a description', function() {
    assert.strictEqual(amulet.description, 'A heavy, tarnished necklace containing a deep purple amethyst. The amulet has a faint aura of foreboding');
  });

  it('Has a inspectText', function() {
    assert.strictEqual(amulet.inspectText, 'The amulet shudders and smoke begins to seep out from behind the jewel');
  });
});
