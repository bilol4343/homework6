function task4(N){
    let result = 0;
    while (N > 0) {
        result += N % 10;
        N = Math.floor(N / 10);
    }
    if (result % 2 === 0){
        return "Juft";
    }else {
        return "Toq";
    }
}
console.log(task4(1234561));
console.log(task4(1235));