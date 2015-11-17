/*below you are giving a random num generator.  check see if the random number is in the provided array or any future array passed to the function.  alert true or false based on condition*/


function checkArr(arr) {

  var getRandomArbitrary = (function (arr) {
    return Math.floor(Math.random() * (30 - 0) + 0);
  })();

  arr.indexOf(getRandomArbitrary) >= 0 ? : alert('true'): alert('false');

}

var arr = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

console.log(check(arr));