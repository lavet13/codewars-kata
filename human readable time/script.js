'use strict';

function humanReadable(seconds) {
  const basedOnTen = function (num) {
    if (num <= 9) {
      return `0${num}`;
    }
    return num;
  };

  if (seconds === 0) return '00:00:00';

  const s = seconds % 60;
  const m = Math.trunc((seconds / 60) % 60);
  const h = Math.trunc(seconds / 60 / 60);
  console.log('Minutes:', m);
  console.log('Seconds:', s);
  console.log('Hours:', h);
  return `${basedOnTen(h)}:${basedOnTen(m)}:${basedOnTen(s)}`;
}

console.log(humanReadable(359999));
