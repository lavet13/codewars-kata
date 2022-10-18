'use strict';

function rolldiceSumProb(sum, dice) {
    const getDices = function () {
        return Array.from({ length: dice }, () => [1, 2, 3, 4, 5, 6]);
    };

    let prob;
    let diceArray = getDices();
    let i = -1;
    while (++i !== diceArray.length) {}

    // your code here
    return prob;
}

rolldiceSumProb(8, 3);
