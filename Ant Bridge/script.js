'use strict';

function antBridge(ants, terrain) {
  let map = new Map();
  let data = getBridgeArray(terrain);
  console.log(data);
}

const getBridgeArray = function (terrain) {
  let bridgesArray = [];

  while (terrain.indexOf('.') !== -1) {
    let bridge = terrain.slice(
      terrain.indexOf('.'),
      terrain.indexOf('-', terrain.indexOf('.'))
    ); // string

    bridgesArray.push(bridge);

    terrain = terrain.slice(terrain.indexOf('-', terrain.indexOf('.')));
  }

  return bridgesArray;
};

console.log(`result is ${antBridge('GFEDCBA', '----...-----...----..-----')}`);
