/*Write a function that accepts an array of integers in
random order of unknown length, but with one number 
missing. Return the missing number.*/

function findMissing(arr) {
  var reversedArr = arr.sort(function (a, b) {
    return a - b;
  });
  var minNum = reversedArr[0];
  var maxNum = reversedArr[reversedArr.length - 1];
  for (var i = 0; i <= maxNum; i++) {
    if (reversedArr[i] === minNum) {
      minNum++;
    } else {
      return minNum;
    }
  }
  return reversedArr;
}

var test = [6, 5, 4, 3, 1, 7, 8, 9];

var set3 = [93, 95, 101, 96, 102, 100, 97, 90, 92, 105, 106, 103, 88, 91, 94, 104, 89, 98];

var test5 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
findMissing(test5);