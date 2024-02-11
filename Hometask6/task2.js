function getNewArray (arr, index, input) {
    arr.splice(index, 0, ...input);
return arr
}
console.log(getNewArray([1,2,3,4,5], 3, ['a', 'b', 'c']))