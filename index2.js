const crypto = require("crypto-js");

function generateMD5Hash(inputString) {
  const md5Hash = crypto.MD5(inputString); // Genera el hash MD5
  return md5Hash.toString(crypto.enc.Hex); // Convierte a hexadecimal
}

function filtroMatriz(input) {
  const S = 6; // Valor de referencia S

  // Obtener la matriz de entrada
  const inputArray = input.array;

  // Filtrar los números dentro del rango [0, S*S] y convertirlos a hexadecimal
  const filteredArrayHex = inputArray
    .filter((num) => num * num >= 0 && num * num <= S * S)
    .map((num) => generateMD5Hash(num.toString()));

  return filteredArrayHex;
}



// Ejemplos
console.log(filtroMatriz({ array: [1, 2, 3, 5, 6, 8, 9] })); // Output: [ '1', '4', '9', '19', '24', '40' ]
console.log(filtroMatriz({ array: [-2, -1] })); // Output: [ '1', '4' ]
console.log(filtroMatriz({ array: [-6, -5, 0, 5, 6] })); // Output: [ '0', '19', '19', '24', '24' ]
console.log(filtroMatriz({ array: [-10, 10] })); // Output: []
