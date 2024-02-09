let x1 = 1234;
let x2 = 1249;
let arr1 = Array.from(String(x1), Number);
let arr2 = Array.from(String(x2), Number);
let n = 0
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]===arr2[i]) {
        n = n + 1
    }
}
console.log(n)
let m = 0
for (let j = 0; j <arr1.length; j++) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[j]===arr2[i]) {
            m = m + 1
        }
    }
}
console.log(m)
