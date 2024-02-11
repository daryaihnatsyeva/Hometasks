function dasha(initialDate) {
    let now = new Date()
    let con = 0;
    for (let year = initialDate.getFullYear(); year <= now.getFullYear(); year++) {
        for (let month = 0; month < 12 ; month++) {
            let date = new Date (Date.UTC(year, month, 13));
            if (date.getDay() === 5 && date <= now && date >= initialDate) {
            con = con + 1
            }
        }
    }  
return con
}
console.log(dasha(new Date('01.01.2000')))

