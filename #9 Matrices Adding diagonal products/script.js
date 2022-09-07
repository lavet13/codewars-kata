'use strict';

function sumProdDiags(matrix) {
    const sum1 = calc(matrix);
    return matrix;
}

const calc = function (matrix) {
    console.log(matrix.reduce((arr, cur, i) => {}, []));
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
