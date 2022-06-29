'use strict';

const parseIntoArray = function (csv) {
   const array = csv.split('\n');

   return array.map(item => {
      return item.split(',');
   });
};

function csvColumns(csv, indices) {
   let array = parseIntoArray(csv);
   let result = [];

   const filterArray = function () {
      let temp = [];

      for(let index of indices) {
         if(index < indices.length) {
            temp.push(array.map(item => item[index]));
         } else {
            console.log("empty string");
            continue;
         }
      }

      array = [];

      for(let i = 0; i < temp[0].length; i++) {
         array.push(temp.map(item => item[i]));
      }

      return array;
   };

   result = filterArray();

   const parseBackToString = function () {
      return result.map(item => item.join(',')).join('\n');
   };

   return result.length === 0 ? "" : parseBackToString();
}

// csvColumns("1,2,3\n4,5,6", [0, 1]);
// console.log(csvColumns('1,2\n3,4\n5,6', [5, 6, 7]));
console.log(csvColumns("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j", [1, 3, 5, 7]));


/*

for indices = [0,1]
and csv = 
"1,2,3
4,5,6"
: expected [ [ '1', '2' ], [ '4', '5' ] ] to equal '1,2\n4,5'

*/