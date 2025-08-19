const task11 = (N) => {
    let kopaytma = 1;
    let son = N;

    while (son > 0) {
        let raqam = son % 10;        
        kopaytma *= raqam;            
        son = Math.floor(son / 10);   
    }

    return kopaytma;
}


console.log(task11(234)); 