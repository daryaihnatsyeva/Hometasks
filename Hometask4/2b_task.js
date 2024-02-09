let x = 15.4;
let y = 0;
let n = 3
for (let i = 0; i < (n-1); i++) {
    y = (Math.random() * x)
    y = y.toFixed(2)
    console.log(y);
    x = x - y
    x = x.toFixed(2)
}
console.log(x)