function task7(a,b,c){
    let max = a;
    if (b > max){
        max = b;
    } if (c >max ){
        max = c;
    }
    return max;
}
console.log(task7(12,15,55));