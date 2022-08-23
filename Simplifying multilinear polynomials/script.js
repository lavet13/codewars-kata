'use strict';

const simplify = function (string) {
  const expression = getSumsSubstractions(string);
  const sums = sumsCalc(expression.sums);
};

const getSumsSubstractions = function (string) {
  const expression = string.split('+');
  const sums = [];

  let substractions = expression.map(string => {
    const [firstOccurency, ...others] = string.split('-');

    if (firstOccurency.length !== 0) {
      sums.push(firstOccurency);
    }

    return others;
  });

  substractions = substractions
    .filter(array => {
      return array.length !== 0;
    })
    .flat(1);

  return {
    substractions,
    sums,
  };
};

const sumsCalc = function (sums) {
  sums.forEach((expr, i, arr) => {
    const chars = expr.slice(1);
    if (chars.length > 2) {
      /*
      3 * 2 = 6?
      abc
      acb
      cab
      cba
      bca
      bac
       */
    } else {
      // ab === ba
      // if(chars === arr[i + 1] || ) {
      // }
    }
  });
};

simplify('-a+5ab+3a-c-2a');
