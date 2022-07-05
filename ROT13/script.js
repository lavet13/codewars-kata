'use strict';

rot13('rknzcyr.');

function rot13(str) {
    substitueCharacters(str);
}

function substitueCharacters(str) {
    const firstHalf = 'abcdefghijklm';
    const secondHalf = 'nopqrstuvwxyz';
    let index, letter;

    findLetters();

    

    function findLetters() {
        const array = {};

        for(let symbol of str) {

            if(/[a-m]/.test(symbol)) {
                index = firstHalf.indexOf(symbol);
                letter = secondHalf[index];
                // console.log(letter);
                // console.log(index);
            } else if(/[n-z]/.test(symbol)) {
                index = secondHalf.indexOf(symbol);
                letter = firstHalf[index];
                // console.log(letter);
                // console.log(index);
            }            
        }
    }

}






// https://stackoverflow.com/questions/35613451/searching-a-string-for-missing-letters-of-the-alphabet-in-javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search