'use strict';

console.log(int32ToIp(2149583361)); // 10000000.00100000.00001010.00000001

function int32ToIp(int32) {
  const template = '--------.--------.--------.--------';

  let map = getTheJuice(int32);
  if (map.size === 0) return '0.0.0.0';

  let binaryArray = Array.from(map.values());

  let templateArray = getTemplate(template);
  console.log(templateArray, binaryArray);

  // FIXME haven't found solution yet, but close to win easily for sure 🙄
  //binaryArray = getBinaryArray(binaryArray, templateArray);
  // so getBinaryArray method is basically the same code as below

  let diffIndex = 0;

  binaryArray = templateArray.map((hyphen, index) => {
    if (hyphen === '.') {
      diffIndex++;
      return '.';
    }

    return binaryArray[index - diffIndex];
  });

  console.log(binaryArray);

  binaryArray = getBinaryString(binaryArray);

  let decimalNumbers = getDecimalNumbers(binaryArray);

  return decimalNumbers.join('.');
}

function getTheJuice(number) {
  let result = new Map();
  let decimalPortion = 1;

  /*
     Math.trunc() - (truncate fractional part)
     Math.floor() - (round down)
     Math.ceil() - (round up)
     Math.round() - (round to nearest integer)
   */

  if (number > 2) {
    decimalPortion = number % 2;
    result.set(number, decimalPortion);
    number = Math.floor(number / 2); // round down

    while (true) {
      decimalPortion = number % 2;
      // let decimalPortion = (number % 1).toFixed(4).substring(2); // what is this? FIXME

      result.set(number, decimalPortion);
      number = Math.floor(number / 2);

      if (number === 0 || number === 1) {
        decimalPortion = number % 2;
        result.set(number, decimalPortion);

        break;
      }
    }
  }

  return result;
}

function getTemplate(template) {
  let concatenate = [];

  template = template.split('');

  for (let array of template) {
    concatenate = concatenate.concat(array);
  }

  return concatenate;
}

function getBinaryString(binaryArray) {
  return binaryArray.join('').split('.');
  //return binaryArray.join(' ').replace(/\s/g, '').split('.');
  // https://stackoverflow.com/questions/6507056/replace-all-whitespace-characters
}

//function getBinaryArray(binaryArray, templateArray) {
//console.log(binaryArray, templateArray);
//let result = [];
//let diffIndex = 0;

//for (let index = 0; index < templateArray.length; index++) {
//if (templateArray[index] === '.') {
//diffIndex++;
//result.push('.');
//continue;
//}

//result.push(
//binaryArray[index - diffIndex]
//);
//}

//return result;
//}

function getDecimalNumbers(binaryArray) {
  let result = [];

  for (let string of binaryArray) {
    let sum = 0;

    for (let [index, number] of string.split('').entries()) {
      sum += +number * 2 ** index;
    }

    result.unshift(sum);
  }

  return result;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// https://sistemy-schisleniya.ru/perevody/iz-desyatichnoj-v-dvoichnuyu
// https://stackoverflow.com/questions/7641818/how-can-i-remove-the-decimal-part-from-javascript-number
// https://stackoverflow.com/questions/4512306/get-decimal-portion-of-a-number-with-javascript
// https://stackoverflow.com/questions/276706/what-are-bitwise-operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers
// https://github.com/tc39/proposal-object-from-entries
