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

  if (
    !/[0-9]/g.test(dancingBrigade) &&
    !hasDuplicates(dancingBrigade.split(''))
  ) {
    const findUpperCaseLetters = function (string) {
      const result = [];
      let index = 0;
      while (index !== -1) {
        index = string.search(/[A-Z]/);
        if (index !== -1) {
          result.push(string[index]);
          string = string.slice(index + 1);
        }
      }

      return result;
    };

    const findLowerCaseLetters = function (string) {
      const result = [];
      const counts = {};
      // FIXME how many letters does this function find, in this case probably use object to collect the amount of those ones
      for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if (letter in counts) {
          counts[letter] += 1;
        } else {
          counts[letter] = 1;
        }
      }

      return result;
    };

    const upperCases = findUpperCaseLetters(dancingBrigade);
    const lowerCases = findLowerCaseLetters(dancingBrigade);

    return '';
  }
}

findChildren('aAbaBb');

// https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/in
