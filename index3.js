function cantidadMinimaNoCambiante(monedas) {
  monedas.sort((a, b) => a - b); // Orden de las monedas 
  let cambioMinimo = 1; //Cantidad Inicial

  for (const moneda of monedas) { //Ordena el Array  y empieza la iteracion
    if (moneda > cambioMinimo) {
      break; // Si la moneda actual es mayor que el cambio mínimo actual, se detiene el bucle.
    }
    cambioMinimo += moneda;
  }

  return cambioMinimo;
}

//ordenamiento 
//1, 1, 2, 3, 5, 7, 22  // 1, 1, 1, 1, 1 // 1, 5, 1, 1, 1, 10, 15, 20, 100

// Casos de prueba
console.log(cantidadMinimaNoCambiante([5, 7, 1, 1, 2, 3, 22])); // metodo de organizar y empieza a ordenar los posibles cambios 
console.log(cantidadMinimaNoCambiante([1, 1, 1, 1, 1])); //Cuando el cambio sea mayor se detiene la iteracion
console.log(cantidadMinimaNoCambiante([1, 5, 1, 1, 1, 10, 15, 20, 100]));  //55 = 20 + 15 + 10 + 5 + 1 + 1 + 1 + 1 + 1 se rompe el ciclo despues de la ultima iteracion 100


