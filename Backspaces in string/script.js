'use strict';

const findHashTagAndDelete = array => {
  let foundIndex = array.indexOf('#');

  while (foundIndex !== -1) {
    deleteChar(array, foundIndex);
    deleteChar(array, foundIndex - 1);
    foundIndex = array.indexOf('#', foundIndex);
  }

  console.log(array);
};

const deleteChar = (array, index) => {
  array.splice(index, 1);
};

const getArray = s => s.split('');
const getString = array => array.join('');

function cleanString(s) {
  if (s.length === 0 || !/[a-z]/i.test(s)) return '';

  const array = getArray(s);
  findHashTagAndDelete(array);
  console.log(getString(array));

  return getString(array);
}

cleanString('ab#c');
