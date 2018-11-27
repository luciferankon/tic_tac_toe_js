let {initGrid,
    separateRowColumn,
    isSubset
} = require('./utilLib.js');

let readline = require('readline-sync');

const winningCombinations = [[1,2,3],
                             [4,5,6],
                             [7,8,9],
                             [1,4,7],
                             [2,5,8],
                             [3,6,9],
                             [1,5,9],
                             [3,5,7]];

let board = {
  'grid' : initGrid(),
  'display' : function(){
                return this.grid.map(
                element=>element.join(' | ')
                ).join('\n---------\n')
               },
  'insert' : function(symbol,position){
                let cell = separateRowColumn(position);
                this.grid[cell.row][cell.column]=symbol;
                return this.grid;
             }
}

let players = {
  'counter' : 0,
  '1': {'name' : 'ankon',
        'moves' : [],
       },
  '2': {'name' : 'dheeraj',
        'moves' : [],
       },
  'crntPlayer':function(){
                  return this[(this.counter++)%2+1];
               },
  'updateMoves':function(position){
                  let crntPlayer = this.crntPlayer();
                  crntPlayer.moves.push(position);
                  return crntPlayer;
                },
  'hasWon' : function(position) {
                let crntPlayer = this.updateMoves(position);
                let isSubsetofMoves = isSubset.bind(null,crntPlayer.moves);
                let wonCondition =  winningCombinations.filter(isSubsetofMoves);
                if(wonCondition.length) { 
                  return {name: crntPlayer.name, hasWon: true };
                }
                return {name: crntPlayer.name, hasWon: false};
              },
  'displayResult' : function(position){
                let result = this.hasWon(position);
                if(result.hasWon){
                  return result.name + ' has won';
              }
  }
}

let symbolDetails = {
  'symbols' : ['X','O'],
  'crntSymbol' : function(){
                    let index = 0;
                    let symbols = this.symbols;
                    return function(){
                      return symbols[index++%2];
                    }
                 }
}

let runGame = function(){
  let crntSymbol = symbolDetails.crntSymbol();
  console.log(board.display());
  while(true){
    let position = +readline.question("enter position");
    board.insert(crntSymbol(),position);
    console.log(board.display());
    let result = players.displayResult(position);
    if(result){
      console.log(result);
      process.exit(1);
    }
  }
}



exports.board = board;
exports.players = players;
