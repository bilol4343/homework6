const task15 = (matn) => {
    let xs = matn.split(" ");
    let xl = "";

    for (let i = 0; i < xs.length; i++) {
        if (xs[i].length > xl.length) {
            xl = xs[i];
        }
    }
    return xl;
}

console.log(task15("Assalomu aleykum brodar azizlar"));
console.log(task15("Ablakhatov Bilol Dilmurod O'g'li")); 


