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
            for (let char of arr) {
                if (i === 0)
                    temp += string[string.indexOf(char.toUpperCase()) + num];
                if (i !== 0)
                    temp +=
                        string[
                            string.indexOf(
                                result[i - 1].slice(i).toUpperCase()
                            ) + num
                        ];
            }

            result.push(temp);
        });
    });

    console.log(result);
}

flapDisplay(['CAT'], [[1, 13, 27]]); // By invoking this function the result is gonna be DOG
