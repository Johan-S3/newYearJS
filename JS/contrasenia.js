/*
Contraseña valida

Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiuBf&g9". Delo contario debe retornar false.
 */

const contrasenaValida = function (contrasenia) {
  if (contrasenia === "2Fj(jjbFsuj" || contrasenia === "eoZiuBf&g9") return true
  return false;
}

let contra = "2Fj(jjbFsuj";

if (contrasenaValida(contra)) {
  console.log("Constraseña valida");
} else {
  console.log("Constraseña NO valida");
}

