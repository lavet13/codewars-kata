'use strict';

const simplify = function (string) {
  const expression = getSumsSubstractions(string);

  const sumsMap = mappingValues(expression.sums);
  //console.log(sumsMap);

  const subsMap = mappingValues(expression.substractions);
  //console.log(subsMap);

  const calculatedMaps = calculateMaps({ sumsMap, subsMap });
  console.log(calculatedMaps);

  const concatenatedMaps = concatMaps({ sumsMap, subsMap });
  console.log(concatenatedMaps);
  return concatenatedMaps;
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

  const flatDeep = function (arr, d = 1) {
    if (!Array.isArray(arr)) {
      return arr;
    }
    return d > 0
      ? arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), [])
      : arr.slice();
  };

  substractions = substractions.filter(array => {
    return array.length !== 0;
  });

  substractions = flatDeep(substractions, Infinity);

  console.log(`substractions: ${substractions}, sums: ${sums}`);

  return {
    substractions,
    sums,
  };
};

const mappingValues = function (arr) {
  const map = new Map();

  arr.forEach((element, i, arr) => {
    let decimals = element.match(/\d/g)
      ? element.match(/\d/g).join('')
      : undefined;
    decimals = decimals || 1;
    decimals = Number(decimals);

    let chars = element.match(/\D/g)
      ? element.match(/\D/g).sort().join('')
      : undefined;
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

const calculateMaps = function ({ sumsMap, subsMap }) {
  sumsMap.forEach((value, key) => {
    if (subsMap.has(key)) {
      sumsMap.set(key, sumsMap.get(key) - subsMap.get(key));
      if (sumsMap.get(key) === 0) sumsMap.delete(key);
      subsMap.delete(key);
    }
  });

  subsMap.forEach((_, key) => {
    if (subsMap.get(key) === 0) subsMap.delete(key);
  });

  sumsMap.forEach((value, key, arr) => {
    if (value < 0) {
      subsMap.set(key, Math.abs(arr.get(key)));
      arr.delete(key);
    }
  });

  return { sumsMap, subsMap };
};

const addPropertyToMap = function (_, key, arr) {
  if (!this) {
    arr.set(key, [arr.get(key), 'sum']);
  } else {
    arr.set(key, [arr.get(key), 'sub']);
  }
};

const concatMaps = function ({ sumsMap, subsMap }) {
  let substract = false;

  sumsMap.forEach(addPropertyToMap.bind(substract));
  substract = true;
  subsMap.forEach(addPropertyToMap.bind(substract));

  const sumsArray = Array.from(sumsMap),
    subsArray = Array.from(subsMap);

  const concat = [...sumsArray, ...subsArray];

  const result = concat.sort(([key1], [key2]) => {
    let i = -1;

    if (key1.length === key2.length) {
      while (++i < key1.length) {
        if (key1[i] === key2[i]) {
          i++;
        }
        if (key1[i] !== key2[i]) {
          if (key1[i] > key2[i]) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    } else {
      if (key1.length > key2.length) {
        return 1;
      }
      if (key1.length < key2.length) {
        return -1;
      }
    }
  });

  return result.reduce((acc, [key, [value, type]], i) => {
    console.log(value, type, acc);
    if (i === 0 && type === 'sum') {
      acc += `${value === 1 ? '' : value}${key}`;
    } else {
      acc += `${type === 'sum' ? '+' : '-'}${value === 1 ? '' : value}${key}`;
    }

    return acc;
  }, ``);
};

//simplify('-a+5ab+3a-c-2a');
//simplify('-abc+3a+2ac');
//simplify('xyz-xz');
//simplify('a+ca-ab');
//simplify('xzy+zby');
simplify('-8fk-4yk-qk-3vqy+5kv+7kf+yqv+4ky+4kf+yvqkf');
