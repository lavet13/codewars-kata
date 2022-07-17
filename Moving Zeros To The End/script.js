'use strict';

//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let count = 0;

  arr = arr.filter(item => {
    count = item === 0 ? ++count : count;
    return item !== 0;
  });

  let i = -1;

  while (++i < count) {
    arr.push(0);
  }

  return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
