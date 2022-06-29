'use strict';

function transpose(matrix) {
  console.log(matrix);
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push(matrix.map(item => item[i]));
  }

  return result;
}

console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);
