"use strict";

function findMissingLetter(array) {

    const isLowerCase = letter => {
        return letter.toLowerCase() === letter;
    };
    
    if(array.length >= 2) {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        let result;

        alphabet.forEach((letter, index) => {
            if(letter === array[0].toLowerCase()) {
                result = alphabet.slice(index);
            }
        });

        for(let i = 0; i < array.length; i++) {
            if(result[i] !== array[i].toLowerCase()) {
                if(isLowerCase(array[i])) {
                    return result[i];
                } else {
                    return result[i].toUpperCase();
                }
            }
        }
    }
    
    return ' ';
}

console.log(findMissingLetter(['O','Q','R','S']));
console.log(findMissingLetter(['a','b','c','d','f']));