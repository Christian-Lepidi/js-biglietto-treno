let price = document.getElementById("prezzo");

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log(km);

const cost = km * 0.21;
console.log(cost);

let discountedPrice20 = age * 0.2;
console.log(discountedPrice20);
let discountedPrice40 = age * 0.4;
console.log(discountedPrice40);

let finalPrice = cost;
if (age < 18) {
  finalPrice = cost - discountedPrice20;
} else if (age >= 65) {
  finalPrice = cost - discountedPrice40;
}
price.innerHTML = finalPrice.toFixed(2);
