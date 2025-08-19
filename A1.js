function task1(x){
    let max = 0;
    while (x> 0) {
        let num = x % 10;
        if (num > max){
            max = num;
        }
        x = Math.floor(x / 10);
    }
    return max;
}
console.log(task1(1852367)); 