'use strict';

function flapDisplay(lines, rotors) {
    const string = `ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789`;

    const getChar = index => {
        if (index > string.length - 1) {
            return getChar(index - (string.length - 1) - 1);
        }
        return index;
    };

    let result = [];
    let temp = ``;

    lines.forEach((word, i) => {
        const rotor = rotors[i];

        let chars = word.split('');
        rotor.forEach((num, i) => {
            for (const char of chars) {
                if (i === 0)
                    temp += string[string.indexOf(char.toUpperCase()) + num];
                if (i !== 0) {
                    const getPreviousString = result[i - 1].slice(i);
                    temp = result[i - 1].slice(0, i);

                    for (const char of getPreviousString.split('')) {
                        temp +=
                            string[
                                getChar(
                                    string.indexOf(char.toUpperCase()) + num
                                )
                            ];
                    }
                    continue;
                }
            }

            result.push(temp);
        });
    });

    console.log(result);
}

flapDisplay(['CAT'], [[1, 13, 27]]); // By invoking this function the result is gonna be DOG
