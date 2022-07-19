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
  let result = { strings: [] };
  let comments = [];

  for (let array of Object.values(obj)) {
    comments = comments.concat(array);
  }

  result.strings = array.filter(string => {
    // return comments.indexOf(string) === -1;
    return !comments.includes(string);
  });

  console.log(result);

  return result;
};

// indexOf works for array as well as for strings
/*
    // indexOf() method
    var first = [ 1, 2, 3, 4, 5 ];
    var second = [ 4, 5, 6 ];
    
    var difference = first.filter(x => second.indexOf(x) === -1);
    console.log(difference);
    
    // Output: [ 1, 2, 3]
*/

/*
    // ES7 includes() method
    var first = [ 1, 2, 3, 4, 5 ];
    var second = [ 4, 5, 6 ];

    var difference = first.filter(x => !second.includes(x));
    console.log(difference);

    // Output: [ 1, 2, 3]
*/

/* 
    // ES6 Set Object
    var first = [ 1, 2, 3, 4, 5 ];
    var second = [ 4, 5, 6 ];
    
    var b = new Set(second);
    var difference = [...first].filter(x => !b.has(x));
    
    console.log(difference);
    
    // Output: [ 1, 2, 3]
*/
// https://www.techiedelight.com/find-difference-between-two-arrays-in-javascript/

function solution(input, markers) {
  let array = getArray(input);
  let obj = getComments(array, markers);
  getStringsWithoutComments(obj, array);
  return getString(array);
}

console.log(
  solution(
    'apples, pears # and bananas\ngrapes\nbananas !apples\nsupa mobile !apples\nsupa drive !apples',
    ['#', '!']
  )
);
