function  getFibonachi(number) {
    return number <= 1 ? number : getFibonachi(number-1) + getFibonachi(number-2)
}
function place(number,m) {
    let arr = []
    for (let i = 0; i < m; i++) {
        let a = getFibonachi(number + i)
        arr.push(a)
    }
return arr
}
console.log(place(6,5))