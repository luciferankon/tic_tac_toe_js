let {initGrid,
    separateRowColumn
} = require('./utilLib.js');

let board = {
  'grid' : initGrid(),
  'display' : function(){
                return this.grid.map(
                element=>element.join(' | ')
                ).join('\n---------\n')
              },
  'insert' : function(symbol,position){
                let object = separateRowColumn(position);
                this.grid[object.row][object.column]=symbol;
                return this.grid;
             },
}

let players = {
  'counter' : 0,
  '1': {'name' : 'ankon',
        'moves' : []
       },
  '2': {'name' : 'dheeraj',
        'moves' : []
       },
  'crntPlayer':function(){
                  return this[(this.counter++)%2+1];
               },
  'updateMoves':function(position){
                  let crntPlayerMoves = this.crntPlayer().moves;
                  crntPlayerMoves.push(position);
                  return crntPlayerMoves;
  }
}

exports.board = board;
exports.players = players;
