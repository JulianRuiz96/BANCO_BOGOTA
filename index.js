//Julian Ruiz fad6cd96e95338a9d8bfbfb57d1f0b7e

// function generateMD5Hash(inputString) {
//   const md5Hash = crypto.MD5(inputString); // Genera el hash MD5
//   return md5Hash.toString(crypto.enc.Hex); // esta funciona convierte a hexadecimal
// }

const S = 6;

function metodoFiltro(arr, S) {
  const arregloFiltrado = [];// Se alojan los numeros filtrados


  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];//  Numero actual 
    const numStr = num.toString();
    let NumIgual = false;// Este valida la condicion falsa

    
    for (let j = 0; j < numStr.length; j++) {
      const digito = numStr[j]; // Variable Actual 
      if (parseInt(digito) >= S) {
        NumIgual = true; // Esto se repite hasta que la condicion sea falsa osea S sea falso
        break;
      }
    }//Esto se ejecuta hasta que la condiccion sea verdadera si es falsa seguira agregando numero al Array

    //Organiza los numero despues de finalizar la iteracion
    if (!NumIgual) {
      arregloFiltrado.push(num); // ampliar la longitud del array
    }
  }

  return arregloFiltrado.reverse();// 
}

// Casos de prueba 
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40];
const arr3 = [6];
const arr4 = [66];
const arr5 = [65]; 
const arr6 = [6, 2, 1];
const arr7 = [60, 6, 5, 4, 3, 2, 7, 7, 29, 1];

//Resultados esperados
console.log(metodoFiltro(arr1, S));
console.log(metodoFiltro(arr2, S));
console.log(metodoFiltro(arr3, S));
console.log(metodoFiltro(arr4, S));
console.log(metodoFiltro(arr5, S));
console.log(metodoFiltro(arr6, S));
console.log(metodoFiltro(arr7, S));


