/*write a function that accepts a prime number and returns a boolean boased on whether its a prime number*/

function primeCheck(n) {

  var divisibleBy = [];

  if (n === 0) {
    return 'undefined';
  }

  if (n === 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisibleBy.push(i);
    }
  }

  if (divisibleBy.length > 2) {
    return false;
  } else {
    return true;
  }

}


/*stevens solutions*/