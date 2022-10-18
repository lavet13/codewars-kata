'use strict';

function sumProdDiags(matrix) {
    const sum1 = calc(matrix);
    return matrix;
}

const calc = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(matrix[i][j]);
        }
    }
};

console.log(
    sumProdDiags([
        [1, 4, 7, 6, 5],
        [-3, 2, 8, 1, 3],
        [6, 2, 9, 7, -4],
        [1, -2, 4, -2, 6],
        [3, 2, 2, -4, 7],
    ])
);
