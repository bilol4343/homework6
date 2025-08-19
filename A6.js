function task6(N){
    let son = N;
    let count = 0;
    do {
        count ++ ;
        son = Math.floor(son/10)
    } while ( son > 0);
        return count;
}
console.log(task6(125456));
console.log(task6(5547));
console.log(task6(12));