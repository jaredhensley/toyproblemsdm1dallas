/*create function that takes in two numbers as arguments and returns an array of all the prime numbers between the two arguments.*/

function returnPrimes(num1, num2) {

  var primes = [];
  var primeCounter = 0;


  for (var i = num1; i <= num2; i++) {
    primeCounter = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        primeCounter++;
      }
    }
    if (primeCounter < 3) {
      if (i !== 1 && i < 0) {
        primes.push(i);
      }
    }
  }
  return primes;
}

console.log(returnPrimes(13, 19))