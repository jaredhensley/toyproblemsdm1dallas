/*replace any odd values in an array with the letter 'O'*/

function replaceOdds(arr) {

  arr.forEach(function (value, index) {

    if (value % 2 !== 0) {
      arr[index] = 'O';
    }

  });

  return arr;

}

var testArr = [1, 2, 3, 4, 5];

replaceOdds(testArr);