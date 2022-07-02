'use strict';

rot13('EBG13 rknzcyr.');

function rot13(str) {
    substitueCharacters(str);
}

function substitueCharacters(str) {
    const regex = RegExp('[a-m]', 'g');
    let found;

    while((found = regex.exec(str)) !== null) {
        if(/[a-m]/g.test(found[0])) {
            console.log(`Found ${found[0]}. Next starts at ${regex.lastIndex}.`)
        } else {

        }
            
    }
}


function swapLetters() {
    const firstHalf = "abcdefghijklm";
    const secondHalf = "nopqrstuvwxyz";


}

swapLetters();


// https://stackoverflow.com/questions/35613451/searching-a-string-for-missing-letters-of-the-alphabet-in-javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search