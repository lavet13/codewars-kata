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

const getRidOfComments = function (input, markers) {
  const result = [];
  const other = [];

  markers.forEach(marker => {
    let index = -1;

    input.forEach((string, ind) => {
      if ((index = string.indexOf(marker)) !== -1) {
        result.push(string.slice(0, index));
      } else {
        other.push({ s: string, i: ind });
      }
    });
  });

  console.log(other);
  deleteDuplicates(other);

  //other = other.filter(({ s }) => {});

  //for (const { s, i } of other) {
  //result.splice(i, 0, s);
  //}

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
