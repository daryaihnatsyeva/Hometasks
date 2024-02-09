const arr2 = [3, 67, 15, 77, 100];
let maxNumber = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (maxNumber < arr2[i]) {
        maxNumber = arr2[i]
    }
}
console.log(maxNumber)