//below you're given a function that will return a random number between 0 and 30. You're also given an array full of numbers. Your job is to write a function that will get a random number (use the function already written), then alert true if the number is found in the given array. If it's not found in the array, alert false

var getRandomArbitrary = function () {
  return Math.floor(Math.random() * (30 - 0) + 0);
}

var arr = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

function arrSearch() {
  var numToFind = getRandomArbitrary();
  console.log(numToFind);
  if (arr.indexOf(numToFind) > -1) {
    alert('true');
  } else {
    alert('false');
  }
}