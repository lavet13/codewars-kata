'use strict';

const createColumn = function (column) {
  return column.split(',');
};

const findColumns = function (array, indices) {
  // FIXME
  const result = [];
  let flag = false;

  for (const index of indices) {
    if (array[index]) {
      result.push(array[index]);
      flag = true;
    }
  }

  return { result, flag };
};

const parseRows = row => row.join(',');
const parseString = string => string.join('\n');

function csvColumns(csv, indices) {
  if (csv !== '') {
    const array = csv.split('\n');
    const columns = [];
    let result = [];

    let flag = false;

    for (const column of array) {
      columns.push(createColumn(column));
    }

    for (const row of columns) {
      // FIXME
      flag = findColumns(row, indices).flag;
      result.push(findColumns(row, indices).result);
    }

    //  console.log(result); // test

    result = result.map(row => parseRows(row));

    //  console.log(result); // test

    result = result.reduce(
      (previousValue, currentValue) => `${previousValue}\n${currentValue}`
    );
    //  console.log(result); // test

    return result;
  } else {
    return '';
  }
}

// console.log(csvColumns("1,2,3\n4,5,6", [0, 1]));
console.log(csvColumns('1,2\n3,4\n5,6', [5, 6, 7]));
