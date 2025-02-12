// Genere un patrón de asteriscos en forma de piramide

let valor = prompt("Ingrese la altura de la piramide: ");

const piramide = (i) => {
  if (isNaN(valor)) {
    console.log("El valor ingresado no es un número.");
  } else {
    valor = parseInt(valor);
    cantAst = "*";
  for (let j = i; j > 0 ; j--) {
    console.log(" ".repeat(j) + cantAst);
    cantAst += " *";
  }
  }
}
piramide(valor);
