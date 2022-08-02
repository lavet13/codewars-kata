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
  let obj = { strings: [] };

  for (let index in array) {
    if (array[index].includes('-')) {
      obj.strings.push(convertTwoDigitNumbers(array[index]));
      continue;
    }

    if (array[index].includes('hundred')) {
      obj.strings.push('00');
      continue;
    }

    if (array[index].includes('thousand')) {
      obj.strings.push('000');
      continue;
    }

    if (array[index].includes('million')) {
      obj.strings.push('000000');
      continue;
    }

    if (array[index].includes('and')) {
      continue;
    }

    obj.strings.push(numbers[array[index]]);
  }

  return obj;
};

const getNecessaryInfo = function ({ strings }) {
  let result = [];

  let zeros = {},
    numbers = {};

  let obj = Object.fromEntries([...strings.entries()]);

  for (const key in obj) {
    typeof obj[key] === 'string' && (zeros[key] = obj[key]);
    typeof obj[key] === 'number' && (numbers[key] = obj[key]);
  }

  let zerosIndexesArray = Object.keys(zeros);
  let numbersIndexesArray = Object.keys(numbers);

  result.push(zeros, numbers, zerosIndexesArray, numbersIndexesArray);

  return result;
};

const concat = function (array) {
  const [zeros, numbers, zerosIndexesArray, numbersIndexesArray] = array;
  let result = {};

  const hasZeros = function () {
    const findZeros = function (obj) {
      const arrays = Object.entries(obj);
      let hasZero = false;

      for (let [property, array] of arrays) {
        for (let index in array) {
          if (array[index] !== 0) {
            array = array.slice(index);
            break;
          }
        }

        hasZero = array.some(element => element === 0);
        if (hasZero) return { array, property };
      }

      return false;
    };

    const { lastValue, firstValue, ...results } = result;
    if (
      results &&
      Object.keys(results).length === 0 &&
      Object.getPrototypeOf(results) === Object.prototype
    )
      return false;

    // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

    return findZeros(results);
  };

  const deleteZeros = function (obj) {
    let { array, property } = obj;
    obj.array = array.filter(element => element !== 0);
    return obj;
  };

  const difference = function (number, zero) {
    let splitNumber = String(number).split('');
    let splitZero = zero.split('');
    //console.log(zerosIndexesArray, numbersIndexesArray);

    if (splitZero.length === 2) {
      let indexNumber = splitNumber.length - 1;
      for (let index = splitZero.length - 1; index >= 0; index--) {
        splitZero[index] = splitNumber[indexNumber] || 0;
        indexNumber--;
      }
    } else {
      splitZero = splitZero.map((zero, index) => {
        // delete zeros after finding a number
        return splitNumber[index] || 0;
      });
    }

    splitNumber = splitNumber.filter(number => !splitZero.includes(number));

    /*
     * Array.prototype.diff = function(a) {
     *  return this.filter(x => a.indexOf(x) < 0); // if it less than 0 it's gonna get difference between two arrays, otherwise it's gonna be intersection
     * }
     * */

    // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
    return splitNumber.length || splitZero;
  };

  for (let zeroIndex of zerosIndexesArray) {
    let numberIndex = +zeroIndex + 1;

    if (numbers[numberIndex]) {
      result[`result-${numberIndex}`] = difference(
        numbers[numberIndex],
        zeros[zeroIndex]
      );
    } else {
      result.lastValue = zeros[zeroIndex];
      // one hundred here
    }
  }

  result.firstValue = numbers[0];

  console.log(result);

  let isArray = hasZeros();

  while (isArray.array) {
    let withoutZerosData = deleteZeros(isArray);
    result[withoutZerosData.property] = withoutZerosData.array;
    isArray = hasZeros();
  }

  return result;
};

function parseInt(string) {
  let array = getArray(string);
  let obj = getArrayOfNumbers(array);
  let dataArray = getNecessaryInfo(obj);
  array = concat(dataArray);
}

parseInt('seven hundred eighty-three thousand nine hundred and nineteen');

parseInt('one hundred');
parseInt('one hundred one');
//parseInt('twenty');
//parseInt('two hundred forty-six');
