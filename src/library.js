let {initGrid,
    separateRowColumn
} = require('./utilLib.js');

let board = {
  'grid' : initGrid(),
  'display' : function(){
            return this.grid.map(
            element=>element.join(' | ')
            ).join('\n---------\n')},
  'insert' : function(symbol,position){
           let object = separateRowColumn(position);
           this.grid[object.row][object.column]=symbol;
           return this.grid;}
}

exports.board = board;
