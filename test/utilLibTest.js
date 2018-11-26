let assert = require('assert');
let {initGrid,
    separateRowColumn,
    isSubset
}= require('../src/utilLib.js');

describe('initialize grid',function(){
  it('should return a array of array containing 3 spaces',function(){
    assert.deepEqual(initGrid(),[[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
  });
});

describe('separate row column',function(){
    it('should return object consisting row and column position of the given position',function(){
          assert.deepEqual(separateRowColumn(4),{row:1,column:0});
    });
});

describe('is subset', function() {
  it('should return true when all values are subset of super set', function() {
    assert.equal(isSubset([1,2,3], [1,2,3]), true);
  });
  it('should return true when some values are subset of super set', function(){
    assert.equal(isSubset([1,2,3],[1,2]),true);
  });
  it('should return false when no values are present in superset', function(){
    assert.equal(isSubset([1,2,3],[4,5]),false);
  });
  it('should return true when no values are there in subset',function(){
    assert.equal(isSubset([1,2,3],[]),true);
  });
  it('should return true if one element is subset of superset',function(){
    assert.equal(isSubset([1,2,3],[1]),true);
  });
  it('should return true if all values of superset is present in the subset and there are extra values in subset',function(){
    assert.equal(isSubset([1,2,3],[1,2,3,4]),false);
  });
});
