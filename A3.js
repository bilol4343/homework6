function tubSonlar(x) {
    let count = 0;
    let num = 2;
    let result = "";

    while (count < x) {
        let isPrime = true;
        for (let j = 2; j * j <= num; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += num + " ";
            count++;
        }
        num++;
    }
    return result.trim();
}

console.log(tubSonlar(20));git commit -m "Davomini qo‘shdim"

