
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let res = [];
  
  if(arguments.length == 0){
    return res;
  }
  for (let i = 0; i < matrix.length; i++) {
      if (Array.isArray(matrix[i]) && i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          res.push(matrix[i][j]);
        }
      }
      if (Array.isArray(matrix[i]) && i % 2 != 0) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          res.push(matrix[i][j]);
        };
      if(!Array.isArray(matrix[i])){
        res.push(matrix[i])
      }
    }
  }
  return res;
}  
