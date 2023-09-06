

function generateMD5Hash(inputString) {
  const md5Hash = crypto.MD5(inputString); // Genera el hash MD5
  return md5Hash.toString(crypto.enc.Hex); // esta funciona convierte a hexadecimal
}


function metodoFiltro(arr, S) {
  const arregloFiltrado = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const numStr = num.toString();
    let contieneDigitoMayorOIgual = false;

    for (let j = 0; j < numStr.length; j++) {
      const digito = numStr[j];
      if (parseInt(digito) >= S) {
        contieneDigitoMayorOIgual = true;
        break;
      }
    }

    if (!contieneDigitoMayorOIgual) {
      arregloFiltrado.push(num);
    }
  }

  return arregloFiltrado.reverse();
}

const S = 6;
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40];
const arr3 = [6];
const arr4 = [66];
const arr5 = [65]; // Caso de prueba esperado del PDF es 5 
const arr6 = [6, 2, 1];
const arr7 = [60, 6, 5, 4, 3, 2, 7, 7, 29, 1];

console.log(metodoFiltro(arr1, S));
console.log(metodoFiltro(arr2, S));
console.log(metodoFiltro(arr3, S));
console.log(metodoFiltro(arr4, S));
console.log(metodoFiltro(arr5, S));
console.log(metodoFiltro(arr6, S));
console.log(metodoFiltro(arr7, S));






