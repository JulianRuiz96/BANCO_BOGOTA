// const crypto = require("crypto-js");

// function generateMD5Hash(inputString) {
//   const md5Hash = crypto.MD5(inputString); // Genera el hash MD5
//   return md5Hash.toString(crypto.enc.Hex); // Convierte a hexadecimal
// }

function arrayAlCuadradoYFiltrado(arr, S) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const cuadrado = num * num;

    if (cuadrado <= S * S) {
      resultado.push(cuadrado);
    }
  }

  return resultado.sort((a, b) => a - b);
}

// Ejemplos con S=6
const ejemplo1 = [1, 2, 3, 5, 6, 8, 9];
console.log(arrayAlCuadradoYFiltrado(ejemplo1, 6)); 
const ejemplo2 = [-2, -1];
console.log(arrayAlCuadradoYFiltrado(ejemplo2, 6));
const ejemplo3 = [-6, -5, 0, 5, 6];
console.log(arrayAlCuadradoYFiltrado(ejemplo3, 6)); 
const ejemplo4 = [-10, 10];
console.log(arrayAlCuadradoYFiltrado(ejemplo4, 6)); 

