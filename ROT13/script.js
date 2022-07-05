'use strict';

console.log(rot13('This is my first ROT13 excercise!'));

function rot13(str) {
    return substitueCharacters(str).join('');
}

function substitueCharacters(str) {

    const firstHalf = 'abcdefghijklm';
    const secondHalf = 'nopqrstuvwxyz';

    const isUpperCase = function (letter) {
        return letter === letter.toUpperCase();
    };

    const array = [];
    let letter;
    let index;

    for(let symbol of str) {
        if(/[a-m]/i.test(symbol)) {
            index = firstHalf.indexOf(symbol.toLowerCase());
            letter = secondHalf[index];
            array.push(isUpperCase(symbol) ? letter.toUpperCase() : letter.toLowerCase());
        } else if(/[n-z]/i.test(symbol)) {
            index = secondHalf.indexOf(symbol.toLowerCase());
            letter = firstHalf[index];
            array.push(isUpperCase(symbol) ? letter.toUpperCase() : letter.toLowerCase());
        } else {
            array.push(symbol);
        }       
    }
    
    return array;
}







// https://stackoverflow.com/questions/35613451/searching-a-string-for-missing-letters-of-the-alphabet-in-javascript

// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
