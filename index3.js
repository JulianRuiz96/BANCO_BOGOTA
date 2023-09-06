function minUnchangeableAmount(coins) {
  coins.sort((a, b) => a - b);
  let minChange = 1;

  for (const coin of coins) {
    if (coin > minChange) {
      break;
    }
    minChange += coin;
  }

  return minChange;
}

// Test cases
console.log(minUnchangeableAmount([5, 7, 1, 1, 2, 3, 22])); // Output: 20
console.log(minUnchangeableAmount([1, 1, 1, 1, 1])); // Output: 6
console.log(minUnchangeableAmount([1, 5, 1, 1, 1, 10, 15, 20, 100])); // Output: 55
