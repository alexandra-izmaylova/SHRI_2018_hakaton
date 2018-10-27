function simpleNumbers(n) {
    let arr =[];
    if(n == 1) return console.log("arr is empty");
    for(let i = 2; i <= n; i++) {
        for(let j = 2; j <= i; j++) {
            if(i != 2 && i % j == 0) break;
            else {
                arr.push(i);
                break;
            }
        }
    }
    return console.log(arr);
}

simpleNumbers(15);