const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should round the first argument', function() {
    assert.equal(calculateNumber(1.0, 3), 4);
    assert.equal(calculateNumber(1.3, 3), 4);
    assert.equal(calculateNumber(1.7, 3), 5);
  });

  it('should round the second argument', function() {
    assert.equal(calculateNumber(1, 3.0), 4);
    assert.equal(calculateNumber(1, 3.3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should return the correct sum', function() {
    assert.equal(calculateNumber(1.3, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.3, 3.3), 4);
    assert.equal(calculateNumber(1.7, 3.2), 5);
    assert.equal(calculateNumber(1.3, 3.8), 5);
    assert.equal(calculateNumber(1.6, 3.8), 6);
  });
});
