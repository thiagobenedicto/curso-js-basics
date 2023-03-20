let num = [5, 2, 3, 5, 3, 4]

/* let ind = 1
console.log(`O valor ${ind} está na posição ${num.indexOf(ind)}`)
 */
resSoma = num.reduce((somaParcial, a) => somaParcial + a, 0)
console.log(resSoma)
/* 
for (let c = 0; c < num.length; c++) {
    console.log(num[c])
} 
*/

/* for(let c in num) {
    console.log(`Posição ${c} valor ${num[c]}`)
} */
