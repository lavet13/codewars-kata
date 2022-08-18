'use strict';

const howManyBees = function (hive) {
  let count = 0;
  if (!hive) return 0;

  const produceTheJuice = function (row) {
    let bee;

    while ((bee = row.indexOf('b')) !== -1) {
      if (bee + 2 < row.length && row.slice(bee, bee + 3).join('') === 'bee') {
        // to the RIGHT
        row = row.slice(bee + 3);
        console.log(++count);
      } else if (
        bee - 2 >= 0 &&
        row.slice(bee - 2, bee + 1).join('') === 'eeb'
      ) {
        // to the LEFT
        row = row.slice(bee + 1);
        console.log(++count);
      } else {
        row = row.slice(bee + 1);
      }
    }
  };

  hive.forEach(produceTheJuice);

  const verticalHive = [];

  if (hive[0]) {
    for (let i = 0; i < hive[0].length; i++) {
      verticalHive.push(hive.map(item => item[i]));
    }
  } else return 0;

  console.log(hive);
  console.log(verticalHive);

  verticalHive.forEach(produceTheJuice);

  return count;
};

console.log(
  howManyBees(['bee.bee'.split(''), '.e..e..'.split(''), '.b..eeb'.split('')])
);

console.log(
  howManyBees(['bee.bee'.split(''), 'e.e.e.e'.split(''), 'eeb.eeb'.split('')])
);

/*
random(Tests)

b...eebee
e.b.be.ee
be.be.e.e
..bebe.ee
.e..eebbe
.e.eebb.e
..ee.eebb
eeebb...e
.bebe.ee.

✘  expected: 10 but was: 32
*/
