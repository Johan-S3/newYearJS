/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: Un arreglo de 
números , la porsicion inicial y la posicion final. La función debe retomar la suma de todos 
los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: Puedes asumir que la posición inicial va a ser menor o igual a la posición final, 
y que están dentro de los limites del arreglo.
*/

let a, b;
let numeros = [];

let longitud = prompt("¿Cuantos números tendrá el arrreglo?");
if (isNaN(longitud)) {
  throw new Error("El valor ingresado no es un número");  
} else {
  longitud = parseInt(longitud);
  for (let i = 0; i < longitud; i++) {
    num = prompt("Ingrese el " + (i + 1 + "°") + " número:");
    if (isNaN(num)) {
      throw new Error("El valor ingresado no es un número");
      i--;
    }else{
      num = parseInt(num);
      numeros.push(num);
    }
  }
}

a = prompt("Ingrese la posición incial:");
if (isNaN(a)) {
  throw new Error("El valor ingresado no es un número");
} else {
  a = parseInt(a);
  if (a > numeros.length && a <= 0) {
    throw new Error("Ingrese un valor que esté dentro de la longitud del arreglo.");
  }
}

b = prompt("Ingrese la posición final:");
if (isNaN(b)) {
  console.log("El valor ingresado no es un número");
} else {
  b = parseInt(b);
  if (b > numeros.length && b <= a) {
    throw new Error("Ingrese un valor que esté dentro de la longitud del arreglo.");
  } 
}


const sumarArreglo = function (a, b, arreglo) {
  let suma = 0;
  for (let i = a; i <= b; i++) {
    suma += arreglo[i];
  }
  console.log("El resultado de la suma es: " + suma);
}

sumarArreglo(a, b, numeros);