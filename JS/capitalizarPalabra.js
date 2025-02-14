/*
Capitalizar palabra 

Escribir una funcion llamada capitalizar que reciba un string y capitalice la primera letra:
 */

let capitalizar = function (palabra) {
  newWord = "";
  newWord+= palabra[0].toUpperCase();
  for (let i = 1; i < palabra.length; i++) {
    newWord+= palabra[i].toLowerCase();
  }
  return newWord;
}

let palabra = prompt("Ingrese una palabra: ");
console.log(capitalizar(palabra));

