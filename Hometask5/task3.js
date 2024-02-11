function sum(num) {
    let d = 0;
    for (let i = 0; i < num.length; i++) {
        d = d + num[i]
    }
    return d/num.length
}

console.log(sum([12, 15, 20, 25, 59, 79]))