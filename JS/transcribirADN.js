/*
Escribir una función llamada transcribir que riciba un string (una cadena de ADN) y retorne otro string (su complemento ARN). Los complementos son los siguientes:
G -> C
C -> G
T -> A
A -> U
 */

let transcribir = function (palabra) {
  newWord = "";
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "G") newWord += "C";
    else if (palabra[i] === "C") newWord += "G";
    else if (palabra[i] === "T") newWord += "A";
    else if (palabra[i] === "A") newWord += "U";
    else newWord += palabra[i];
  }

  return newWord;
}

let palabra = prompt("Ingrese una palabra: ").toUpperCase();
console.log(transcribir(palabra));

