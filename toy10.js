/*write a
function that accepts a number, n, and returns the nth fibonacci number.use an iterative solution to this problem.if you finish with time left over, implement a recursive solution.*/

function fib(n, sum) {
  sum = sum || 0;
  console.log(sum);
  if (n < 100) {
    return fib(n++, sum + n);
  }
}


function fib(n) {
  var sum = 1;
  var seq = [];
  for (var i = 1; i <= n; i++) {
    seq.push(sum);
    sum = sum + i;

  }
  return seq;
}

console.log(fib(20));


function fib(n) {
  var arr = [];
  var transformed = [];
  for (var i = 0; i <= n; i++) {
    arr.push(i);
  }

  arr.reduce(function (x, y) {
    return transformed.push(x + x);

  })

  return transformed;
}

console.log(fib(30));

function fibba(n) {
  var last = 0;
  var current = n;
  var sum = current + last;
  last = current;
  console.log(sum);
}

//recursive brenden

function nthfib(n) {

  if (n === 0) {
    return n;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return nthfib(n - 1) + nthfib(n - 2);

}

//michaels

function fib(n) {
  var array = [0, 1];

  for (var i = 0; i <= n; i++) {
    array.push(array[i] + array[i + 1]);
  }

  return array[n - 1];
}