function task9(num){
    let sum = 0;
    while (num > 0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    if (sum < 10) {
        return "kichik";
    } else if (sum <= 20) {
        return "ortacha";
    } else {
        return "katta";
    }
}
console.log(task9(583));