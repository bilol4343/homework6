function task14(n){
    let number = 0;
    for (let i = 1; i < n ; i ++){
        if (n % i === 0){
            number += i
        }
    }
    return number == n;
}
console.log(task14(6));
console.log(task14(28));
console.log(task14(25));