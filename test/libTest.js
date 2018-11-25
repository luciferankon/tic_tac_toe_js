let assert = require('assert');
let {board,
    initGrid,
    separateRowColumn
} = require('../src/library.js');

describe('display board',function(){
  it('should return the empty board while nothing is inserted',function(){
    let expectedOutput = "  |   |  \n";
    expectedOutput += "---------\n";
    expectedOutput += "  |   |  \n";
    expectedOutput += "---------\n";
    expectedOutput += "  |   |  ";
    assert.equal(board.display(),expectedOutput);
  });
});

describe('insert into board',function(){
  it('should return grid of the board after inserting the element at the specified position',function(){
    let expectedOutput = [[' ',' ','X'],
                          [' ',' ',' '],
                          [' ',' ',' ']];
    assert.deepEqual(board.insert('X',3),expectedOutput);
  });
});
