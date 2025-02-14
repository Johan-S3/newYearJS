/*
Capitalizar cada palabra

Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:
 */

let capitalizar = function (frase) {
  arreFrase = frase.split(" ");
  let newfrase = [];
  for (let i = 0; i < arreFrase.length; i++) {
    let word = arreFrase[i][0].toUpperCase() + arreFrase[i].substring(1).toLowerCase();
    newfrase.push(word)
  }
  return newfrase.join(" ");
}

let frase = prompt("Ingrese una frase: ");
console.log(capitalizar(frase));
