/*
Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una linea a parte.
*/

let elementos = [];

longitud = prompt("¿Cuantos elementos va a contener el arreglo?");

if (isNaN(longitud)) {
  throw new Error("El valor ingresado no es un número");
} else {
  longitud = parseInt(longitud);
  for (let h = 0; h < longitud; h++) {
    let elemento = prompt("Ingrese el " + (h + 1) + "° elemento:");
    elementos.push(elemento);
  }
}


let imprimirArreglo = elementos => {
  for (let i = 0; i < elementos.length; i++){
    console.log(elementos[i]);
  }
}

imprimirArreglo(elementos);