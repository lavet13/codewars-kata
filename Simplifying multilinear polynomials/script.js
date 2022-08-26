'use strict';

const simplify = function (string) {
  const expression = getSumsSubstractions(string);

  const sumsMap = mappingValues(expression.sums);
  console.log(sumsMap);

  const subsMap = mappingValues(expression.substractions);
  console.log(subsMap);
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
    .flat();

  console.log(`substractions: ${substractions}, sums: ${sums}`);

  return {
    substractions,
    sums,
  };
};

const mappingValues = function (arr) {
  const map = new Map();

  arr.forEach((element, i, arr) => {
    let decimals = element.match(/\d/g)?.join('');
    decimals ??= 1;
    decimals = Number(decimals);
    let chars = element.match(/\D/g)?.join('');
    if (chars) {
      if (!map.has(chars)) {
        map.set(chars, decimals);
      } else {
        map.set(chars, map.get(chars) + decimals);
      }
    } else {
      map.set('no-char', decimals);
    }
  });

  return map;
};

simplify('-5a+15abc+3a-c-2a+15');
