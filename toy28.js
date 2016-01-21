//Description: you have an array of prices (numbers) that each need to be adjusted according to a single value of inflation (a percentage).
var prices = [.99, 1.99, 6.99, 29.99];
var inflation = .22;

function inflator(arr, rate) {
  var inflated = 1 + rate;
  var newArr = arr.map(function (el) {
    return Number((el * inflated).toFixed(2));
  });
  return newArr;
}

inflator(prices, inflation);