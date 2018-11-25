let assert = require('assert');
let {board,
    players
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

describe('current player detail',function(){
  it('should return current player object',function(){
    let player1 = {'name' : 'ankon',
                   'moves': [1,2,3,4,5]};
    let player2 = {'name' : 'dheeraj',
                   'moves': [6,7,8,9]};
    assert.deepEqual(players.crntPlayer(),player1);
    assert.deepEqual(players.crntPlayer(),player2);
  });
});
