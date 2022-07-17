'use strict';

/*
  Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

  Example:

  Given an input string of:

  apples, pears # and bananas
  grapes
  bananas !apples
  The output expected would be:

  apples, pears
  grapes
  bananas 
 * */

const getArray = function (input) {
  return input.split('\n');
};

const getString = function (array) {
  return array.join('');
};

/*
const deleteDuplicates = function (array) {
  let obj = {};

  for (const { s, i } of array) {
    if (i in obj) {
      continue;
    }

    obj[i] = s;
  }

  console.log(obj);

  return obj;
};
*/

const getRidOfComments = function (input, markers) {
  let result = [];

  markers.forEach(marker => {
    input.forEach(string => {
      result.forEach(element => {
        if (marker in element) {
          element[marker].push(string);
        }

        result.push({ marker: [string] });
        /*
        [
          {'#': [ "some string", "some string"]},
          {'!': [ "some string", "some string"]},
        ] 
        */
      });
    });
  });

  return result;
};

function solution(input, markers) {
  let array = getArray(input);
  array = getRidOfComments(array, markers);
  return getString(array);
}

console.log(
  solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])
);
