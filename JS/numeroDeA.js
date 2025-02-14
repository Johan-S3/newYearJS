/*
Número de A es (letra "a")

Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a".
 */

let numeroDeAes = function (palabra) {
  let regExp = /a/ig;
  if (palabra.match(regExp) != null) {
    return palabra.match(regExp).length;
  }
  return 0;
}

let palabra = prompt("Ingrese una palabra: ");
console.log("Cantidad de A: " + numeroDeAes(palabra));