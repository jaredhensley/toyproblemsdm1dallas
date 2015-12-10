/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

function findSum(mult1, mult2, limit) {
  var sum = 0;
  for (var i = 0; i < limit; i++) {
    if (i % mult1 === 0 || i % mult2 === 0) {
      console.log(i, mult1, mult2, sum);
      sum = sum + i;
    }
  }
  return sum;
}

console.log(findSum(3, 5, 1000));