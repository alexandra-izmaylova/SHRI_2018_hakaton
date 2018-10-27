let arr = [-7, 1, 1, 6, -4, 0];
let min;

for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        min = arr[i];
        if(arr[j] <= min) {
            min = arr[j];
            arr[j] = arr[i];
            arr[i] = min;
        }
    }
}

console.log(arr);