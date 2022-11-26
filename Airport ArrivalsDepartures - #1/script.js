'use strict';

function flapDisplay(lines, rotors) {
    const string = `ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789`;
    let result = [];
    let findChar;

    lines.forEach((word, i) => {
        const rotor = rotors[i];
        const arr = word.split('');
        let temp = ``;

        rotor.forEach((num, i) => {
            for (const char of arr) {
                if (i === 0)
                    temp += string[string.indexOf(char.toUpperCase()) + num];
                if (i !== 0) {
                    const getPreviousString = result[i - 1].slice(i);

                    for (const char of getPreviousString.split('')) {
                        temp +=
                            string[string.indexOf(char.toUpperCase()) + num];
                    }
                }
            }

            result.push(temp);
        });
    });

    console.log(result);
}

flapDisplay(['CAT'], [[1, 13, 27]]); // By invoking this function the result is gonna be DOG
