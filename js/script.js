let number1 = 13;
var number2 = 15;
const number3 = 20;

number1 = 18;
console.log(number1);

// number3 = 22;
// console.log(number3);
// se provo a modificare number3 mi dà errore

// let name1 = 'Marco'
// let name1 = 'Giulia'
// Dà errore perchè il comando let non può essere dichiarato
// una seconda volta sullo stesso elemento

let numero = 1
numero = true
console.log(`il mio numero è ${numero}`)
numero = false
console.log(`il mio numero è ${numero}`)


let casualnumber = Math.floor(Math.random() * 10);
console.log(casualnumber)

if (casualnumber === 7) {
    document.getElementById("lotteria").innerHTML = "Bravo, hai vinto!!!"
}
else {
    document.getElementById("lotteria").innerHTML = "Ritenta, sarai più fortunato... forse"
}

console.log(casualnumber)

let primoaddendo = 8
let secondoaddendo = 7
console.log(primoaddendo + secondoaddendo)

let hobby1 = 'cinema'
let hobby2 = 'libri'
console.log(`A Luca piace andare al ${hobby1} e leggere i ${hobby2}`)