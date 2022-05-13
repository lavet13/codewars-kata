function selection_sort(array) {

    let newArray = [];
    array.forEach(item => {
        if(item % 2 !== 0) {
            newArray.push(item);
        }
    });


    let x;

    for(let i = 1; i < newArray.length; i++) {
        x = newArray[i];
        let j = i - 1;
        while(j >= 0 && x < newArray[j]) {
            newArray[j + 1] = newArray[j];
            j--;
        }

        newArray[j + 1] = x;
    }

    let index = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            array[i] = newArray[index];
            index++;
        }
    }

    return array;
}

console.log(selection_sort([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]