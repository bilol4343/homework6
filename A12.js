const password = function(password){
    if (password.length >= 8 ){
        return "Qoysa boladi ";
    }else {
        return "Bomiydi bunaqa parol";
    }
}
console.log(password("ablaxatovA7"));
console.log(password("123b"));