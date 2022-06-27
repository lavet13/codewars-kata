'use strict';

function findChildren(dancingBrigade) {
  const hasDuplicates = function (array) {
    let valuesSoFar = {};

    for (let i = 0; i < array.length; i++) {
      let value = array[i];

      // prop in object
      if (value in valuesSoFar) {
        return true;
      }

      valuesSoFar[value] = true;
    }

    return false;
  };

  // const findUpperCaseLetters = function (array) {
  //   const result = [];
  //   let index = 0;

  //   while (index !== -1) {
  //     index = array.join('').search(/[A-Z]/);

  //     if (index !== -1) {
  //       result.push(array[index]);
  //       array = array.slice(index + 1);
  //     }
  //   }

  //   return result.sort((a, b) => {
  //     if (a < b) {
  //       return -1;
  //     }
  //     if (a > b) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // };

  const findUpperCaseLetters = function (array) {
    let index;

    while (index !== -1) {
      index = array.join('').search(/[a-z]/);
      if (index !== -1) {
        array.splice(index, 1);
      }
    }

    return array.sort();
  };

  const findLowerCaseLetters = function (array) {
    const result = [],
      counts = {};

    let index = 0,
      letter;

    while (index !== -1) {
      index = array.join('').search(/[a-z]/);

      if (index !== -1) {
        letter = array[index];

        if (letter in counts) {
          counts[letter] += 1;
        } else {
          counts[letter] = 1;
        }

        result.push(array[index]);
        array = array.slice(index + 1);
      }
    }

    return { counts, result };
  };

  const concatLetters = function (upper, lower) {
    const result = [];
    let count;

    upper.forEach(letter => {
      count = lower.counts[letter.toLowerCase()];
      result.push(letter);
      for (let i = 0; i < count; i++) {
        result.push(letter.toLowerCase());
      }
    });

    return result.join('');
  };

  const upperCases = findUpperCaseLetters(dancingBrigade.split('')); // since it's modifying original array

  if (!/[0-9]/g.test(dancingBrigade) && !hasDuplicates(upperCases)) {
    const lowerCases = findLowerCaseLetters(dancingBrigade.split(''));

    return concatLetters(upperCases, lowerCases);
  }
  return '';
}

console.log(findChildren('beeeEBb'));

// https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/in
