let x = 15;
let y = 0;
let n = 3
for (let i = 0; i < (n-1); i++) {
    y = Math.floor(Math.random() * x) 
    console.log(y);
    x = x - y 
}
console.log(x)
