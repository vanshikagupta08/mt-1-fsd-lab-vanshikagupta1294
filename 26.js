function flattenArray(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let temp = flattenArray(arr[i]);

            for (let j = 0; j < temp.length; j++) {
                newArr.push(temp[j]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let arr = [1, [2, [3, 4], 5], [6, 7]];

console.log("Flattened Array:", flattenArray(arr));