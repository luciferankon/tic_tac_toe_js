let assert = require('assert');
let {board,
    players,
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
                   'moves': []};
    let player2 = {'name' : 'dheeraj',
                   'moves': []};
    assert.deepEqual(players.crntPlayer(),player1);
    assert.deepEqual(players.crntPlayer(),player2);
  });
});

describe('update player moveset',function(){
  it('should return updated array of moves',function(){
    assert.deepEqual(players.updateMoves(6),{'name' : 'ankon', 'moves': [6]});
    assert.deepEqual(players.updateMoves(2),{'name' : 'dheeraj','moves': [2]});
  });
});

describe('has won',function(){
  it('should return true when users moves is a superset of a winning condition',function(){
    players[1].moves = [1,2,3];
    players[2].moves = [2,5,7];
    assert.deepEqual(players.hasWon(9),{name: 'ankon', hasWon : true});
    assert.deepEqual(players.hasWon(8),{name: 'dheeraj', hasWon : true});
  });
});

describe('display',function(){
  it('should return current player\'s data',function(){
    players[1].moves = [1,2,6];
    players[2].moves = [6,9,8];
    assert.equal(players.displayResult(3),'ankon has won');
    assert.equal(players.displayResult(3),'dheeraj has won');
    assert.equal(players.displayResult(3),'ankon has won');
    assert.equal(players.displayResult(3),'dheeraj has won');
  });
});
