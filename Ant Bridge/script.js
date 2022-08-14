'use strict';

function antBridge(ants, terrain) {
  const getBridge = function (terrain) {
    let bridgeArray = [];

    while (terrain.indexOf('.') !== -1) {
      bridgeArray.push(
        terrain.slice(
          terrain.indexOf('.'),
          terrain.indexOf('-', terrain.indexOf('.'))
        )
      );

      terrain = terrain.slice(terrain.indexOf('-', terrain.indexOf('.')));
    }

    return bridgeArray;
  };

  let bridgeArray = getBridge(terrain);
  let antsArray = ants.split('');
  console.log(bridgeArray, antsArray);
}
console.log(`result is ${antBridge('GFEDCBA', '------....-.---')}`);
