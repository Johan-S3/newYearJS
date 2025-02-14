/*
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente: 
"fizz" si el número es múltiplo de 3.
"buzz" si el número es multiplo de 5.
"fizzbuzz" si el número es multiplo tanto de 3 como de 5.
Si no cumple ningna de las condicones anteriores debe retornar el mismo número.
 */

num = parseInt(prompt("Ingrese un número entero: "));

let fizzbuzz = function (numero) {
  let texto;
  if (numero % 3 == 0 && numero % 5 == 0) {
    texto = "fizzbuzz";
  } else if (numero % 3 == 0) {
    texto = "fizz";
  } else if (numero % 5 == 0) {
    texto = "buzz"
  } else {
    texto = numero;
  }
  return texto;
}

console.log(fizzbuzz(num))