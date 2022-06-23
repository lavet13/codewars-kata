'use strict';

function antBridge(ants, terrain) {
  console.log(`terrain = ${terrain}

ants = ${ants}`);
  if (terrain.includes('.')) {
    const calcGapLength = function (index) {
      let i = terrain.indexOf('.', index);
      if (i === -1) return -1;

      let length = 0;
      while (terrain[i] === '.') {
        i++;
        length++;
      }

      return {
        length: length,
        index: i - length,
      };
    };

    const calcAllGaps = function () {
      let array = [],
        indexOfArray = 0,
        index = 0;

      while (calcGapLength(index) !== -1) {
        array.push(calcGapLength(index));
        index = array[indexOfArray].index + array[indexOfArray]['length'];
        indexOfArray++;
      }

      return array;
    };

    let gaps = calcAllGaps();
    console.log(gaps);

    const antsGoThroughBridge = function (ants, length) {
      let array = ants.split('');
      let bridge = [];
      let remain = [];
      let cross = [];

      let counter = 0;
      let i = array.length - 1;

      for (; i >= array.length - (length + 2); i--) {
        bridge.push(array[i]); // method "push" reverse ant-bridges, which what i want at the beginning
        counter++;
      }

      console.log(ants.length, counter);
      counter = ants.length - counter;
      console.log(counter);
      // recursion function https://www.freecodecamp.org/news/what-is-recursion-in-javascript/
      const crossUntilEnds = function (index, count = 1) {
        if (count > counter) {
          return;
        }

        remain.unshift(array[index]);
        count++;
        index++;

        crossUntilEnds(index, count);
      };

      crossUntilEnds(i);

      console.log(remain);
      // FIXME
      // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

      // console.log(remain); // array
      // console.log(bridge); // array

      return {
        bridge: bridge.join(''),
        remain: remain.join(''),
        result: bridge.concat(remain).join(''),
      };
    };

    // gaps.forEach(({ length, index }) => {
    ants = antsGoThroughBridge(ants, gaps[0].length).result;
    console.log(ants);
    // });

    return ants;
  }

  return ants;
}

// console.log(`result is ${antBridge("GFEDCBA", "------------...-----------")}`); // EDCBAGF
console.log(`result is ${antBridge('GFEDCBA', '------....-.---')}`); // AGFEDCB

/*

Test Results:


example
Log
terrain = ------------...-----------

ants = GFEDCBA
[ { length: 3, index: 12 } ]
EDCGF

expected 'EDCGF' to equal 'EDCBAGF'



hard
Log
terrain = ------....-.---

ants = GFEDCBA
[ { length: 4, index: 6 }, { length: 1, index: 11 } ]
FEDCBAG
expected 'FEDCBAG' to equal 'AGFEDCB'


two gaps
Log
terrain = ------------...-----..----

ants = GFEDCBA
[ { length: 3, index: 12 }, { length: 2, index: 20 } ]
EDCBAGF
expected 'EDCBAGF' to equal 'BAGFEDC'


many gaps
Log
terrain = -.-.-.-

ants = GFEDCBA
[ { length: 1, index: 1 },
  { length: 1, index: 3 },
  { length: 1, index: 5 } ]
CBAGFED
expected 'CBAGFED' to equal 'GFEDCBA'




*/
