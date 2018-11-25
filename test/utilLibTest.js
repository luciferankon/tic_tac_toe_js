let assert = require('assert');
let {initGrid,
    separateRowColumn
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
