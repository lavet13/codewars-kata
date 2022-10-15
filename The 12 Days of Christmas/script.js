'use strict';

const comparator = function (a, b) {
    // actual code
    const isNumber = number => Number.isFinite(+number);

    let [firstChars] = a.split(' ');
    let [secondChars] = b.split(' ');

    if (isNumber(firstChars) && isNumber(secondChars)) {
        if (+firstChars > +secondChars) {
            return -1;
        } else {
            return 1;
        }
    } else if (isNumber(firstChars) || isNumber(secondChars)) {
        if (isNumber(firstChars)) {
            return secondChars.includes('a')
                ? -1
                : secondChars.includes('On')
                ? 1
                : 'kago?';
        } else {
            return firstChars.includes('a')
                ? 1
                : firstChars.includes('On')
                ? -1
                : 'kago?';
        }
    } else {
        if (a.length > b.length) {
            return -1;
        } else {
            return 1;
        }
    }
};

const lines = [
    'On the 12th day of Christmas my true love gave to me',
    '12 drummers drumming,',
    '11 pipers piping,',
    '10 lords a leaping,',
    '9 ladies dancing,',
    '8 maids a milking,',
    '7 swans a swimming,',
    '6 geese a laying,',
    '5 golden rings,',
    '4 calling birds,',
    '3 French hens,',
    '2 turtle doves and',
    'a partridge in a pear tree.',
];

let shuffle = function (list) {
    let shuffled = [...list];
    for (let i = 0; i < shuffled.length; i++) {
        if (Math.random() > 0.5) {
            let j = (i + 3) % shuffled.length;
            // swap lines i & j
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
    }
    return shuffled;
};

const shuffled = shuffle(lines);

console.log(shuffled.sort(comparator));
