"use strict";

/*
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

function permutations(string) {
  let result = [];

  const replaceStr = (string) => {
    let array = string.split("");
    let k, x;
    for (let i = 0; i < arrayOfString.length; i++) {
      k = i;
      x = arrayOfString[i];
    }
  };

  console.log(replaceStr(string));
}

permutations("ab"); // ['ab', 'ba']
