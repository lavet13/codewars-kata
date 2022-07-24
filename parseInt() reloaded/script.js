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
// https://lingvister.ru/blog/kak-chitat-chisla-na-angliyskom-two-hundred-ili-two-hundreds

const numbers = {
  zero: 0,
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
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const getArray = function (string) {
  return string.split(' ');
};

const convertTwoDigitNumbers = function (string) {
  let array = string.split('-');

  const deleteZero = string => Number(string.slice(0, 1));

  array = array.map(string => {
    return String(numbers[string]).includes(0)
      ? deleteZero(String(numbers[string]))
      : numbers[string];
  });

  return Number(array.join(''));
};

const getArrayOfNumbers = function (array) {
  let obj = { strings: [], indexes: [] };

  for (let index in array) {
    if (array[index].includes('-')) {
      obj.strings.push(convertTwoDigitNumbers(array[index]));
      obj.indexes.push(index);
      continue;
    }

    if (array[index].includes('hundred')) {
      obj.strings.push('00');
      obj.indexes.push(index);
      continue;
    }

    if (array[index].includes('thousand')) {
      obj.strings.push('000');
      obj.indexes.push(index);
      continue;
    }

    if (array[index].includes('million')) {
      obj.strings.push('000000');
      obj.indexes.push(index);
      continue;
    }

    if (array[index].includes('and')) {
      continue;
    }

    obj.strings.push(numbers[array[index]]);
    obj.indexes.push(index);
  }

  return obj;
};

const getResult = function (obj) {
  for (const [strings, indexes] of Object.entries(obj)) {
    console.log(strings, indexes);
  }
};

function parseInt(string) {
  const array = getArray(string);
  let obj = getArrayOfNumbers(array);
  obj = getResult(obj);
}

console.log(
  parseInt('seven hundred eighty-three thousand nine hundred and nineteen')
);
//console.log(parseInt('twenty'));
//console.log(parseInt('two hundred forty-six'));
