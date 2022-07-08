"use strict";

function narcissistic(value) {
  const getArray = function (value) {
    return String(value).split("");
  };

  const getNarcissisticNumber = function (array) {
    return array.reduce((previousValue, currentValue) => {
      return previousValue + currentValue ** array.length;
    }, 0);
  };

  return value === getNarcissisticNumber(getArray(value));
}

// console.log(narcissistic(153));
console.log(narcissistic(1652));
