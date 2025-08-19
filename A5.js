function task5(N){
    let a=0 , b=0;
    do {
        console.log(a)
        let x = a + b;
            a = b
            b = x
    }while (a<=N);

}
task5(10);