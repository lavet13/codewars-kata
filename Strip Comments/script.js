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
  return '';
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

const getComments = function (array, markers) {
  let obj = {};

  markers.forEach(marker => {
    for (let string of array) {
      if (marker in obj) {
        if (string.indexOf(marker) !== -1) {
          obj[marker].push(string);
        }
        continue;
      }

      if (string.indexOf(marker) !== -1) {
        obj[marker] = [string];
      }
      /*
        {
          '#': [ "some string", "some string"],
          '!': [ "some string", "some string"],
        } 
      */
    }
  });
  console.log(obj);

  return obj;
};

const getStringsWithoutComments = function (obj, array) {
  for (let marker in obj) {
  }
};

function solution(input, markers) {
  const { ...parameters } = { input, markers };
  // FIXME
  console.log(parameters);
  let array = getArray(parameters);
  let obj = getComments(array, parameters);
  array = getStringsWithoutComments(obj, array);
  return getString(array);
}

console.log(
  solution(
    'apples, pears # and bananas\ngrapes\nbananas !apples\nsupa mobile !apples\nsupa drive !apples',
    ['#', '!']
  )
);
