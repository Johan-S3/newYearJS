/*
Remover ceros

Escribir una función llamada removerCeros que reciba un arreglo de npumeros y retorne un nuevo arreglo excluyendo los ceros (0);
 */

let removerCeros = function (numeros) {
  numerosN = [];
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] != 0) numerosN.push(numeros[i]); 
  }
  return numerosN;
}

numeros = [0, 12, 52, 0, 14, 0, 14, 6, 5];
console.log(removerCeros(numeros));
