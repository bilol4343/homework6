function palindrom(num){
    let x = num.toString();
    let y = x.split("").reverse().join("");
    return x === y;
}
console.log(palindrom(121));
console.log(palindrom(123));