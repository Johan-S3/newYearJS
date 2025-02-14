/*
Calcular impuestos

Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos . Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornara 0.
*/

let edad = parseInt(prompt("Ingrese la edad: "));
let ingresos = parseFloat(prompt("Ingrese los ingresos: "));

let calcularImpuestos = function (edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) ingresos = ingresos * 0.40; 
  else ingresos = 0
  return ingresos;
}

console.log("El total a pagar es: "+ calcularImpuestos(edad, ingresos));
