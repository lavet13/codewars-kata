'use strict';

function flapDisplay(lines, rotors) {
    const string = `ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789`;
    let result = [];

    lines.forEach((word, i) => {
        const rotor = rotors[i];
        const arr = word.split('');
        let temp; // FIXME

        rotor.forEach(num => {
            result.push(
                arr
                    .map(char => {
                        let findChar =
                            string[string.indexOf(char.toUpperCase()) + num];

                        return findChar;
                    })
                    .join('')
            );
        });
    });

    console.log(result);
}

flapDisplay(['CAT'], [[1, 13, 27]]); // By invoking this function the result is gonna be DOG
