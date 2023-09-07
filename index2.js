// const crypto = require("crypto-js");

// function generateMD5Hash(inputString) {
//   const md5Hash = crypto.MD5(inputString); // Genera el hash MD5
//   return md5Hash.toString(crypto.enc.Hex); // Convierte a hexadecimal
// }


const S = 6;

function arrayAlCuadradoYFiltrado(arr, S) { //definicion de la funcion
  const resultado = []; //Cuadrados del array

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]; // Calcula el cuadrado Num toma la posicion de i
    const cuadrado = num * num; //  Calcula el cuadrado dada la siguiente iteracion

    if (cuadrado <= 66) { // Cambiar 
      resultado.push(cuadrado); // La condicion no se cumple si es mayor o menor a 36
    }
  }

  return resultado.sort((a, b) => a - b); //ascendente y se vuelve el array
}

// Ejemplos con S=6
//Casos de prueba
const ejemplo1 = [1, 2, 3, 5, 6, 8, 9]; 
const ejemplo2 = [-2, -1];
const ejemplo3 = [-6, -5, 0, 5, 6];
const ejemplo4 = [-10, 10];

console.log(arrayAlCuadradoYFiltrado(ejemplo1, S));
console.log(arrayAlCuadradoYFiltrado(ejemplo2, S));
console.log(arrayAlCuadradoYFiltrado(ejemplo3, S)); 
console.log(arrayAlCuadradoYFiltrado(ejemplo4, S)); 

