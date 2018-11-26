const initGrid = function(){
  let grid = [];
  grid.push(new Array(3).fill(' '));
  grid.push(new Array(3).fill(' '));
  grid.push(new Array(3).fill(' '));
  return grid;
}

const separateRowColumn = function(position){
  let object = {'row':Math.floor((position-1)/3),
                'column':(position-1)%3
               };
  return object;
}
 
const isSubset = function(superSet, subset) {
  const isIncluded = function(item) {
    return superSet.includes(item);
  }
  return subset.every(isIncluded);
}

exports.initGrid = initGrid;
exports.separateRowColumn = separateRowColumn;
exports.isSubset = isSubset;
