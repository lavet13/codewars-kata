"use strict";

/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(string) {
  let k;
  let x;
  let isRepeated;
  let isAllRepeatingArray = [];
  let str = string.toLowerCase();

  const isLowerCase = (letter) =>
    letter.toLowerCase() === letter ? letter : letter.toUpperCase();

  const isRepeatedPreviously = (array, char) => {
    for (let item of array) {
      if (item === char) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < str.length; i++) {
    k = i;
    x = str[i];
    isRepeated = false;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === x) {
        isAllRepeatingArray.push(string[i]);
        isRepeated = true;
        break;
      }
    }

    if (!isRepeated && !isRepeatedPreviously(isAllRepeatingArray, string[i])) {
      return isLowerCase(string[i]);
    }
  }

  return "";
}

// console.log(firstNonRepeatingLetter("stress"));
// console.log(firstNonRepeatingLetter("sTreSS"));
console.log(firstNonRepeatingLetter("ssttrreeSS"));
