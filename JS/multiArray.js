/*
Multiplicar arreglo:

Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicacion de los números enteros y retorne la multiplicacion de todos los números;
 */


multiplicarArreglo = function (numeros) {
  let resultado = 1;
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] =! 0)resultado = resultado * numeros[i];
  }
  return resultado.toFixed(0);
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Resultado: " + multiplicarArreglo(numeros));

