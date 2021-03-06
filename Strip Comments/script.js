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
  let result = { strings: [] };
  let indexesArray = [];
  for (const [marker, object] of Object.entries(obj)) {
    const { strings, indexes } = object;
    indexesArray = indexesArray.concat(indexes);
    for (let string of strings) {
      let index = string.indexOf(marker);
      console.log(string);
      result.strings.push(string.slice(0, index).replace(/\s+$/g, '')); // delete last "space" character
    }
  }

  result.indexes = indexesArray;

  // for (let marker of markers) {
  //   for (const { strings, indexes } of comments) {
  //     for (let string of strings) {
  //       // let index = string.indexOf(marker);
  //       console.log(string);

  //       // result.push(
  //       //   strings
  //       //     .slice(0, index)
  //       //     .split('')
  //       //     .filter(s => s.trim().length)
  //       //     .join('')
  //       // );

  //       // result.push(string.slice(0, index).replace(/\s+$/g, '')); // delete last "space" character
  //     }
  //   }
  // }

  // https://www.regular-expressions.info/anchors.html
  // https://www.regular-expressions.info/
  // https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
  // https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g

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

const buildTheString = function (obj, array) {
  const { strings, indexes } = obj;

  let object = {};
  for (let indexOfIndex in indexes) {
    if (indexes[indexOfIndex] in object) {
      continue;
    }

    object[indexes[indexOfIndex]] = strings[indexOfIndex];
  }

  for (const [index, string] of Object.entries(object)) {
    array[index] = string;
  }

  return getString(array);
};

function solution(input, markers) {
  let array = getArray(input);
  let obj = getComments(array, markers);
  obj = deleteComments(obj);
  return buildTheString(obj, array);
}

console.log(
  solution(
    'supa drive !apples\nbananas !apples\ngrapes\nsupa mobile !apples\napples, pears # and bananas',
    ['#', '!']
  )
);
