"use strict";

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str) {
  const replaceFirstLetter = (str) => {
    const removeFirstLetter = str.split("").shift();
    return /[a-z]/i.test(removeFirstLetter)
      ? `${str.slice(1)}${removeFirstLetter}ay`
      : `${str.slice(1)}${removeFirstLetter}`;
  };

  const array = str.split(" ");
  let result = [];
  for (let string of array) {
    result.push(replaceFirstLetter(string));
  }

  return result.join(" ");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("O tempora o mores !")); // Oay emporatay oay oresmay !ay
