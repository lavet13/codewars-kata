// function wave(str){
//     if(!str) return [];

//     let strings = [];

//     for(let i = 0; i < str.length; i++) {
//         const word = Object.entries(str.split("")).map(([key, value]) => {
//             if(+key === i) {
//                 return value.toUpperCase();
//             }

//             return value;
//         }).join("");

//         for(let findSpace of word) {
//             if()
//         }
//         strings.push(word);

//         /* 
//         [
//             0: (2) ['0', 'h']
//             1: (2) ['1', 'e']
//             2: (2) ['2', 'l']
//             3: (2) ['3', 'l']
//             4: (2) ['4', 'o'] 
//         ]
//         */
//     }


//     console.log(strings);
// }

// // wave("hello");
// // console.log(wave(""));
// wave("two words");

// // Object.keys(str.split(""));











function wave(str){
    if(!str) return [];

    let strings = [],
        word = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") continue;
        for([key, value] of Object.entries(str.split(""))) {
            if(+key === i) {
                word.push(value.toUpperCase());
            } else {
                word.push(value);
            }
        }

        strings.push(word.join(""));
        word = [];

        /* 
        [
            0: (2) ['0', 'h']
            1: (2) ['1', 'e']
            2: (2) ['2', 'l']
            3: (2) ['3', 'l']
            4: (2) ['4', 'o'] 
        ]
        */
    }


    console.log(strings);
}

// wave("hello");
// console.log(wave(""));
// wave("two words");
wave(" gap ");

// Object.keys(str.split(""));