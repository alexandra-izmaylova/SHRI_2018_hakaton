let arr = [-7, 3, 1, 6, -4, 0];

let tmp;

for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j <arr.length; j++) {
        if(arr[i] > arr[j]) {
            tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }
}

console.log(arr);