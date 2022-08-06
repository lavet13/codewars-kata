'use strict';

int32ToIp(2149583361); // 10000000.00100000.00001010.00000001

function int32ToIp(int32) {
  let map = getTheJuice(202);
  if (map.size === 0) return;
  console.log(map);
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
      // let decimalPortion = (number % 1).toFixed(4).substring(2);

      result.set(number, decimalPortion);
      number = Math.floor(number / 2);
      if (number === 0 || number === 1) {
        result.set(number, number); // literally don't know even that need to be this way or probably i am just stupid
        break;
      }
    }
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
