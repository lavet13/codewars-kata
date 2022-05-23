"use strict";

function antBridge(ants, terrain) {
  if (terrain.includes(".")) {
    const calcGapLength = function () {
      let index = terrain.indexOf(".");
      let length = 0;
      while (terrain[index] === ".") {
        index++;
        length++;
      }

      return {
        length: length,
        index: index - length,
      };
    };

    let gap = calcGapLength();

    //   console.log(gap); // test

    const antsGoThroughBridge = function () {
      let array = ants.split("");
      let bridge = [];
      let remain = [];

      let i = array.length - 1;
      for (; i >= array.length - (gap.length + 2); i--) {
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
      };
    };

    //   let antsBridge = antsGoThroughBridge().bridge;
    //   let remainAnts = antsGoThroughBridge().remain;
    let results = antsGoThroughBridge();

    return results.bridge + results.remain;
  }

  return ants;
}

console.log(antBridge("GFEDCBA", "------------...-----------"));
