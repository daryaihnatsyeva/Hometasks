let str = 'Dasha';
let bl = true;
console.log(str + bl);
console.log(str + 4);
console.log(4 + bl);
console.log(str * bl);
console.log(str * 4);
console.log(4 * bl);
console.log(str / bl);
console.log(str / 4);
console.log(4 / bl);

console.log(typeof +('5'));

bl = String(bl)
console.log(typeof bl);

let num = 5;
num = String(num);
console.log(typeof num, num);

let num1 = 0;
num1 = Boolean(num1);
console.log(typeof num1, num1);

let b2 = true;
b2 = Number(b2);
console.log(typeof b2, b2);

str = Boolean(str);
console.log(typeof str, str);