//Description: you have an array of numbers and you need to get an array of all values that are even numbers
var numbers = [298, 22, 71, 900, 77, 29, 23, 567, 11, 2];
//Problem hint: Underscore's 'filter' function

function evenFinder(arr) {
  var evenArr = [];
  arr.forEach(function (value, index) {
    if (value % 2 === 0) {
      evenArr.push(value)
      ''
    }
  });
  return evenArr;
}

evenFinder(numbers);


// solution 2

var numbers = [298, 22, 71, 900, 77, 29, 23, 567, 11, 2];

numbers.filter(function (value) {
  return value % 2 === 0
});