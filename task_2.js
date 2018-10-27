let arr = [-7, 1, 1, 6, -4, 0, 2];
let min;
let minIndex;

for(let i = 0; i < arr.length; i++) {
    min = arr[i];
    minIndex = i;
    for(let j = i+1; j < arr.length; j++) {
        if(arr[j] < min) {
            min = arr[j];
            minIndex = j;
        }
    }
    arr[minIndex] = arr[i];
    arr[i] = min;
}

console.log(arr);