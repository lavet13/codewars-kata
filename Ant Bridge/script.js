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

    const enoughSpaceForAnts = function (index) {
      let counter = 0;

      for (let i = index + 2; i < terrain.length; i++) {
        counter++;
      }

      return counter;
    };

    let gaps = calcAllGaps();
    console.log(gaps);

    const antsGoThroughBridge = function (ants, length, index) {
      let array = ants.split('');
      let bridge = [];
      let cross = [];
      let remain = [];

      let i = array.length - 1;
      for (; i >= array.length - (length + 2); i--) {
        bridge.push(array[i]); // method "push" reverse ant-bridges, which what i want at the beginning
      }

      const leftForAnts = enoughSpaceForAnts(index);
      let counter = 0;

      for (; i >= 0; i--) {
        if (counter < leftForAnts) {
          cross.unshift(array[i]); // doesn't save order of the elements
        } else {
          remain.unshift(array[i]); // save order of the elements
        }

        counter++;
      }

      for (let i = array.length - 1; i >= array.length - 2; i--) {
        if (remain.length === 0) {
          cross.unshift(array[i]);
        } else {
          remain.unshift(array[i]);
        }

        bridge.shift();
      }

      cross.forEach(ant => {
        bridge.unshift(ant);
      });

      bridge.reverse();

      // FIXME
      // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

      // console.log(remain); // array
      // console.log(bridge); // array

      return {
        bridge: bridge.join(''),
        remain: remain.join(''),
        result: bridge.join('') + remain.join(''),
      };
    };

    gaps.forEach(({ length, index }) => {
      ants = antsGoThroughBridge(ants, length, index).result;
      console.log(ants);
    });

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
