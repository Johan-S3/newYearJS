export function validarTarjeta(tipoTarjeta) { 
  let reGex;
  let resultado = false;

  let numeroTarjeta = parseInt(prompt("Ingrese el número de la tarjeta: "));

  switch (tipoTarjeta) {
    case 1:
      reGex = /^3[4-7]{1}[0-9]{13}$/;
      if (reGex.test(numeroTarjeta)) resultado = true;
      break;
    case 2:
      reGex = /^3(0[0-5])|[6-8]/;
      if (reGex.test(numeroTarjeta) && numeroTarjeta.toString().length == 14) resultado = true;
      break;
    case 3:
      reGex = /^6011[0-9]{12}$/;
      if (reGex.test(numeroTarjeta)) resultado = true;
      break;
    case 4:
      reGex = /^5[0-5]{1}[0-9]{14}$/;
      if (reGex.test(numeroTarjeta)) resultado = true;
      break;
    case 5:
      reGex = /^4[0-9]{15}$/;
      if (reGex.test(numeroTarjeta)) alert("Ok");
      break;
    default:
      break;
  }
  return resultado;
}