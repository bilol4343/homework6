const average = function(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }

    return sum / arr.length;
}

console.log(average([10, 20, 30, 40]));
