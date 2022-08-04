'use strict';

function int32ToIp(int32) {
  let array = String(int32).split('');
  array = array.map(string => Number(string));
}

// invoke functions

int32ToIp(2149583361); // 10000000.00100000.00001010.00000001

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// https://sistemy-schisleniya.ru/perevody/iz-desyatichnoj-v-dvoichnuyu
// https://learn.javascript.ru/operators
// https://github.com/tc39/proposal-object-from-entries
