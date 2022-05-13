"use strict";

function arrayDiff(a, b) {
    if(b.length === 0) return a;
    if(a.length === 0) return [];
    let result = a.slice();

    b.forEach((num1, index) => {

        result = result.filter(num2 => {
            if(num1 !== num2) {
                return num2;
            }
        });



    });

    console.log(result);
}

arrayDiff([1,2], [1])
// arrayDiff([1,2,3], [1,2]);
