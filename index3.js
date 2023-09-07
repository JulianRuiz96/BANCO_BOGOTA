function cantidadMinimaNoCambiante(monedas) {
  monedas.sort((a, b) => a - b);
  let cambioMinimo = 1;

  for (const moneda of monedas) {
    if (moneda > cambioMinimo) {
      break;
    }
    cambioMinimo += moneda;
  }

  return cambioMinimo;
}

// Casos de prueba
console.log(cantidadMinimaNoCambiante([5, 7, 1, 1, 2, 3, 22])); // Salida: 20
console.log(cantidadMinimaNoCambiante([1, 1, 1, 1, 1])); // Salida: 6
console.log(cantidadMinimaNoCambiante([1, 5, 1, 1, 1, 10, 15, 20, 100])); // Salida: 55
