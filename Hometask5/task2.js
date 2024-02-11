function sum(str) {
    let s = 0;
    for (let i = 0; i < str.length/2; i++) {
        s = (s + Number(str[i]))
    }
    let g = 0;
    for (let i = str.length/2; i < str.length; i++) {
        g = (g + Number(str[i]))
    }
    return s===g ? 'да' : 'нет'
}
console.log(sum("123456"))