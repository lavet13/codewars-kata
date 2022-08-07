// let map = [7, 3, 4, 5];

// let obj = map.reduce((previousValue, currentValue, index) => {
//   // previousValue, currentValue, index, array
//   return Object.assign(previousValue, { [index]: currentValue }); // Enhanced object literal
// }, {});

let map = new Map().set('foo', true).set('bar', false);
console.log(map);

for (let [key, value] of map) {
  // if map used an entries method it didn't change the whole picture of what we might expect, but i think in certain cases it's good to use when we need next() method of Map Iterator etc.
  // it's similar as if it was array.entries cause it was also have index with value, clueless
  console.log(key, value);
}

// map have keys, values methods, and also has entries method(do the same thing) which in some cases can be useful
let arr = Array.from(map); // similar, as above
console.log(arr);

// let set = new Set(map); // map itself has key value pairs, which isn't useful in the set data structure
let set = new Set(map.values()); // Map Iterator which has values

// getting index along with key value pairs
for (let [key, [property, value]] of arr.entries()) {
  // arr itself has key value pairs, and we trying to get index while using entries on the array
  console.log(key, property, value);
}

//console.log(arr.values()); // Array Iterator

//getting key value pairs
//for (let array of arr.values()) {
// // Array Iterator which has next() method
// // similar as if it was a map
//console.log(array);
//}

//getting key value pairs, similar as above but without having next, return and throw methods
//for (let array of arr) {
//console.log(array);
//}

console.log(arr);
console.log(set);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
// https://github.com/tc39/proposal-object-from-entries
