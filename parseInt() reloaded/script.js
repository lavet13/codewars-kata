'use strict';

/*
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/
// https://stackoverflow.com/questions/4986654/multiple-conditions-in-ternary-operators

const parseIntoNumber = function (string) {
  const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twoDigit: {
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
    },
    hundreds: {
      'one hundred': 100,
      'two hundred': 200,
      'three hundred': 300,
      'four hundred': 400,
      'five hundred': 500,
      'six hundred': 600,
      'seven hundred': 700,
      'eight hundred': 800,
      'nine hundred': 900,
    },
  };

  const getNumber = function (char) {
    return numbers[char]
      ? numbers[char]
      : numbers.twoDigit[char]
      ? numbers.twoDigit[char]
      : numbers.hundreds[char];
  };

  const deleteZero = function (array) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === '0') {
        array.splice(i, 1);
      }
    }

    return Number(array.join(''));
  };

  const isHyphen = function (prop) {
    return /-/.test(prop);
  };

  const isHundred = function (previous, next) {
    // next - hundred
    // previous - one, two, three, four, five
    const prepair = `${previous} ${next}`;

    return prepair;
  };

  const deleteHyphens = function (array) {
    const result = [];

    for (const { str: string, ind: index } of array) {
      const splitted = string.split('-');

      splitted.forEach(char => {
        let number = getNumber(char);
        if (/0/.test(number)) {
          result.push(deleteZero(String(number).split('')));
        } else {
          result.push(number);
        }
      });
    }

    return result;
  };

  let array = string.split(' ');
  let result;
  let stringsWithHyphens = [];

  result = array.map((string, index, array) => {
    let prepair;

    if (
      (prepair = isHundred(string, array[index + 1])) &&
      array[index + 1] !== undefined
    ) {
      for (let prop in numbers.hundreds) {
        if (prop === prepair) {
          return deleteZero(String(getNumber(prop)).split(''));
        }
      }
    }

    if (isHyphen(string)) {
      let result;
      stringsWithHyphens.push({ str: string, ind: index });
      result = deleteHyphens(stringsWithHyphens);
      return Number(result.join(''));
    }

    return Number(getNumber(string));
  });

  result = result.filter(item => {
    return /[0-9]/.test(item);
  });

  return result.join('');
};

function parseInt(string) {
  return Number(parseIntoNumber(string));
}

console.log(
  parseInt('seven hundred eighty-three thousand nine hundred and nineteen')
);
//console.log(parseInt('twenty'));
//console.log(parseInt('two hundred forty-six'));
