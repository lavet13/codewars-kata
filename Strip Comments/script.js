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
  return array.join('\n');
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
    for (let index in array) {
      if (marker in obj) {
        if (array[index].indexOf(marker) !== -1) {
          obj[marker].strings.push(array[index]);
          obj[marker].indexes.push(index);
        }
        continue;
      }

      if (array[index].indexOf(marker) !== -1) {
        obj[marker] = { strings: [array[index]], indexes: [index] };
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
  let result = {};
  let comments = [];

  console.log(obj);

  for (let o of Object.values(obj)) {
    comments = comments.concat(o.strings);
  }

  result.strings = array.filter(string => {
    // return comments.indexOf(string) === -1;
    return !comments.includes(string);
  });

  result.arrayComments = comments;
  result.objComments = obj;

  console.log(result);

  return result;
};

// indexOf works for array as well as for strings
// also indexOf similar to includes, except it returns boolean, meanwhile indexOf - index of the found element
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
    var difference = [...first].filter(x => !b.has(x)); // it's spread syntax, cause it's on right hand side of the assignment operator

    console.log(difference);
    
    // Output: [ 1, 2, 3]
*/
// https://www.techiedelight.com/find-difference-between-two-arrays-in-javascript/

const deleteComments = function (obj) {
  let result = [];
  console.log(obj);
  let comments = obj.objComments;

  for (let key in comments) {
    for (let string of comments[key].strings) {
      console.log(string);
      let index = string.indexOf(key);
      // result.push(
      //   string
      //     .slice(0, index)
      //     .split('')
      //     .filter(s => s.trim().length)
      //     .join('')
      // );
      result.push(string.slice(0, index).replace(/\s$/g, '')); // delete last "space" character
    }
  }
  // https://www.regular-expressions.info/anchors.html
  // https://www.regular-expressions.info/

  // okeyeg
  // for (let key in comments) {
  //   for (let index in comments[key]) {
  //     console.log(index); // index
  //     console.log(comments[key][index]); // string
  //   }
  // }

  console.log(result);
  return result;
};

function solution(input, markers) {
  let array = getArray(input);
  let obj = getComments(array, markers);
  obj = getStringsWithoutComments(obj, array);
  let arrayOfStrings = deleteComments(obj);
  return getString(arrayOfStrings);
}

console.log(
  solution(
    'apples, pears # and bananas\nbananas !apples\ngrapes\nsupa mobile !apples\nsupa drive !apples',
    ['#', '!']
  )
);
