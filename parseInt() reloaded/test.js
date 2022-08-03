let map = [7, 3, 4, 5];
// obj = Array.from(map).reduce(
//   (acc, [key, val]) => Object.assign(acc, { [key]: val }),
//   {}
// );

let obj = map.reduce((previousValue, currentValue, index) => {
  // previousValue, currentValue, index, array
  return Object.assign(previousValue, { [index]: currentValue }); // Enhanced object literal
}, {});

console.log(obj);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
// https://github.com/tc39/proposal-object-from-entries
