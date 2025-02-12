/*
Número de likes

Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34567 se convierte en 34K
7.456.345 se convierte en 7M
Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

let num = prompt("Ingrese el número de likes:")

if (isNaN(num)) throw new Error("El valor ingresado no es un número");


let likes = num => {
  if (num < 1000) console.log(`${num}`);
  else if (num < 1000000) console.log(`${Math.round(num / 1000).toFixed(0)}K`);
  else console.log(`${Math.round(num / 1000000).toFixed(0)}M`);
}

likes((num))
