"use strict";

function antBridge(ants, terrain) {
  if (terrain.includes(".")) {
    const calcGapLength = function (index) {
      let i = terrain.indexOf(".", index);
      if (i === -1) return -1;

      let length = 0;
      while (terrain[i] === ".") {
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
        index = array[indexOfArray].index + array[indexOfArray]["length"];
        indexOfArray++;
      }

      return array;
    };

    let gaps = calcAllGaps();
    console.log(gaps);

    const antsGoThroughBridge = function (ants, length) {
      let array = ants.split("");
      let bridge = [];
      let remain = [];

      let i = array.length - 1;
      for (; i >= array.length - (length + 2); i--) {
        bridge.unshift(array[i]);
      }

      for (; i >= 0; i--) {
        remain.unshift(array[i]);
      }

      // console.log(remain); // array
      // console.log(bridge); // array

      return {
        bridge: bridge.join(""),
        remain: remain.join(""),
        result: bridge.join("") + remain.join(""),
      };
    };

    gaps.forEach(({ length }) => {
      ants = antsGoThroughBridge(ants, length).result;
      console.log(ants);
    });

    return ants;
  }

  return ants;
}

console.log(
  `result is ${antBridge("GFEDCBA", "------------...----...--....-----")}`
);

/*

Test Results:

hard
Log
[ { length: 4, index: 6 }, { length: 1, index: 11 } ]

expected 'BAGFEDC' to equal 'AGFEDCB'


many gaps
Log
[ { length: 1, index: 1 },
  { length: 1, index: 3 },
  { length: 1, index: 5 } ]

expected 'BAGFEDC' to equal 'GFEDCBA'


random
Log
[ { length: 1, index: 2 } ]
Random test #1 : In=CBA --.---- Out=CBA
[ { length: 2, index: 2 }, { length: 2, index: 5 } ]

Random test #2 : In=GFEDCBA --..-..------ Out=GFEDCBA

expected 'AGFEDCB' to equal 'GFEDCBA'

*/
