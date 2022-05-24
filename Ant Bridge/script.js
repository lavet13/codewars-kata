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

    return calcAllGaps();

    // let gap = calcGapLength();

    // //   console.log(gap); // test

    // const antsGoThroughBridge = function () {
    //   let array = ants.split("");
    //   let bridge = [];
    //   let remain = [];

    //   let i = array.length - 1;
    //   for (; i >= array.length - (gap.length + 2); i--) {
    //     bridge.unshift(array[i]);
    //   }

    //   for (; i >= 0; i--) {
    //     remain.unshift(array[i]);
    //   }

    //   // console.log(remain); // array
    //   // console.log(bridge); // array

    //   return {
    //     bridge: bridge.join(""),
    //     remain: remain.join(""),
    //   };
    // };

    // //   let antsBridge = antsGoThroughBridge().bridge;
    // //   let remainAnts = antsGoThroughBridge().remain;
    // let results = antsGoThroughBridge();

    // return results.bridge + results.remain;
  }

  return ants;
}

console.log(antBridge("GFEDCBA", "------------...-----------"));
