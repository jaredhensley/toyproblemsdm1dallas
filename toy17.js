//write a function that takes an array of integers and returns the sum of the integers after adding 1 to each

function plusOneSum(arr) {
  var sum = 0;
  arr.forEach(function (value, index) {
    sum = sum + value + 1;
  });
  return sum;
}

plusOneSum([1, 2, 3, 4]);


// reduce attempt

function cashMoney(arr) {
  arr.reduce(function (a, b) {
    return a + b + 1;

  }, {});

}

console.log(cashMoney([1, 2, 3, 4]));