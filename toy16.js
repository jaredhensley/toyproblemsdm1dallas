// Shortest Fizz Buzz
// Write a program that returns an array of numbers from 1 to 100. 
// But, replace multiples of three with "Fizz" instead of the number, and for 
// the multiples of five with "Buzz". Replace numbers which are multiples
//  of both three and five with "FizzBuzz".
// 
// The goal is to write the shortest code possible.

var limit = prompt('enter a fizzbuzz limit');

function FizzBuzzMaker(limit) {

  var newArr = [];
  for (var i = 1; i <= limit; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      newArr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      newArr.push('Buzz');
    } else if (i % 3 === 0) {
      newArr.push('Fizz');
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(FizzBuzzMaker(limit));