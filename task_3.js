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
let arr = Sort([-7, -4, 0, 1, 1, 6]);


function BinarySearch(arr, elem) {
    if(arr.length > 1) {
        let middle = Math.floor((arr.length) / 2);
        if (elem === arr[middle]) {
            return console.log("This element is found");
        }
        else if (elem > arr[middle] && middle > 0) {
            BinarySearch(arr.slice(middle), elem);
        }
        else if (elem < arr[middle] && middle > 0) {
            BinarySearch(arr.slice(0, middle), elem);
        }
    }
    else if (arr.length == 1 && elem === arr[0]) {
        return console.log('This element is found');
    }
    else if (arr.length == 1 && elem != arr[0]) {
        return console.log('This element is not found');
    }
}
BinarySearch(arr, 3);