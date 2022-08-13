'use strict';

function antBridge(ants, terrain) {
  let bridge = getBridgeArray(terrain),
    ground = getGroundArray(terrain, bridge);
  let antsArray = ants.split('');

  console.log(bridge, ground, antsArray);

  let diffIndex;
  const increaseDiffIndex = () =>
    diffIndex <= antsArray.length ? diffIndex++ : (diffIndex = 1);
  //while (
  //bridge.join('').search(/[a-g]/gi) !== -1 ||
  //ground.join('').search(/[a-g]/gi) !== -1
  //) {
  diffIndex = 1;

  let [firstEdge, secondEdge] = ground;
  let [oneBridge] = bridge;

  if (firstEdge) {
    firstEdge = firstEdge.split('');

    firstEdge.splice(
      firstEdge.length - 1,
      1,
      antsArray[antsArray.length - diffIndex]
    );

    increaseDiffIndex();

    oneBridge = oneBridge.split('');

    for (const [i, dot] of oneBridge.entries()) {
      oneBridge[i] = antsArray[antsArray.length - diffIndex];
      increaseDiffIndex();
    }

    // cut the array here

    if (secondEdge) {
      secondEdge = secondEdge.split('');
      secondEdge.splice(0, 1, antsArray[antsArray.length - diffIndex]);
    }

    antsArray = [];

    antsArray[0] = firstEdge[firstEdge.length - 1];

    for (const [i] of oneBridge.entries()) {
      antsArray.push(oneBridge[i]);
    }

    antsArray = antsArray.slice(0, antsArray.length - diffIndex);
    antsArray.push(secondEdge[0]);

    console.log(firstEdge, oneBridge, secondEdge);
    console.log(antsArray);
  }
  //}
}

const getBridgeArray = function (terrain) {
  let bridgeArray = [];

  while (terrain.indexOf('.') !== -1) {
    let bridge = terrain.slice(
      terrain.indexOf('.'),
      terrain.indexOf('-', terrain.indexOf('.'))
    ); // string

    bridgeArray.push(bridge);

    terrain = terrain.slice(terrain.indexOf('-', terrain.indexOf('.')));
  }

  return bridgeArray;
};

const getGroundArray = function (terrain, bridge) {
  for (let b of bridge) {
    terrain = terrain.replace(b, 'b');
  }

  terrain = terrain.split('b');
  //terrain[0] = [...new Set(terrain[0].split(''))].join('');
  return terrain;
};

console.log(`result is ${antBridge('GFEDCBA', '----...-----...----..-----')}`);
