let x = 0;
let x2 = 0;
for (let n = 1; n <=3; n++) {
    x = x + Math.floor(Math.random() * 6) + 1
    x2 = x2 + Math.floor(Math.random() * 6) + 1
}
if (x>x2) {
    console.log('First User Win!')
}  else if (x2>x) {
    console.log('Second User Win!')
}  else if (x===x2) {
    console.log('Draw')
}

