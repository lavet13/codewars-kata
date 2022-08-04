// let map = [7, 3, 4, 5];

//// obj = Array.from(map).reduce(
////   (acc, [key, val]) => Object.assign(acc, { [key]: val }),
////   {}
//// );

// let obj = map.reduce((previousValue, currentValue, index) => {
//   // previousValue, currentValue, index, array
//   return Object.assign(previousValue, { [index]: currentValue }); // Enhanced object literal
// }, {});

let map = new Map().set('foo', true).set('bar', false);
// map have keys, values methods
let arr = Array.from(map); // similar what all i did back then is was Object.entries();
// let set = new Set(map); // entries are arrays which we don't want at all
let set = new Set(map.values());

// getting index along with key value pairs
// for (let value of arr.entries()) {
//   console.log(value);
// }

// getting key value pairs
for (let value of arr.values()) {
  console.log(value);
}

console.log(arr);
console.log(set);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
// https://github.com/tc39/proposal-object-from-entries
