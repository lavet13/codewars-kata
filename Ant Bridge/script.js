"use strict";

function antBridge(terrain, ants) {
    console.log(terrain);
    let dotsArray = getDots(terrain);
    let groundArray = getGround(dotsArray, terrain);
    console.log(dotsArray);
    console.log(groundArray);

    let antsArray = ants.split('');

    const reverseArray = function (antsArray, length) {
        if(length < antsArray.length) {
            return antsArray.splice(-length).reverse();
        }
    };    

    dotsArray.forEach((dots, i, arr) => {
        // dots is a string
        const length = dots.length + 2;
        antsArray = [...reverseArray(antsArray, length), ...antsArray];
        console.log(antsArray);
    });

    return antsArray.join('');
}

antBridge('----..-.-..---', 'GFEDCBA');

function getDots (terrain) {
    const result = [];

    while(terrain.indexOf('.') !== -1) {
        result.push(terrain.slice(terrain.indexOf('.'), terrain.indexOf('-', terrain.indexOf('.'))));

        terrain = terrain.slice(terrain.indexOf('-', terrain.indexOf('.')));
    }
    
    return result;
}

function getGround(dotsArray, terrain) {
    let ground = [];

    // dots is a string
    dotsArray.forEach((dots, i) => {    
        let startIndex = terrain.indexOf(dots);
        // console.log(`bridge: ${dots}`);
        // console.log(`starting index: ${startIndex}`);
        // console.log(`dots length: ${dots.length}`);
        if(dotsArray.length - 1 !== i) {
            ground.push(terrain.slice(startIndex + dots.length, terrain.indexOf('.', startIndex + dots.length)));
        } else {
            ground.push(terrain.slice(startIndex + dots.length));
        }
        terrain = terrain.slice(startIndex + dots.length);
        // console.log(`terrain: ${terrain}`);
        // console.log(`ground: ${ground}`);
    });

    return ground;
}