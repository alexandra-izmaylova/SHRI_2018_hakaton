function Sort(arr) {
    let min;
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        min = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = min;
    }
    return arr;
}
let arr = Sort([0, 1, 213, 213, 12, 3]);


function BinarySearch(arr, elem) {
    let start = 0;
    let end = arr.length;
    let middle;
    while(start <= end) {
        middle = Math.floor((start + end) / 2);
        if(arr[middle] == elem) {
            return console.log("This elem is found");
        }
        else {
            if (elem < arr[middle]) {
                end = middle - 1;
            }
            else
                start = middle + 1;
        }
    }
    return console.log("This element is not found");
}
BinarySearch(arr, 2);