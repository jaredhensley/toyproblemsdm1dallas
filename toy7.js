/*write a function called ABCheck that takes a string paramter and return the string true if the characters a and b are separated by exactly 3 spaces anywhere in the string at least once.*/

function ABCheck(str) {
  var test = str.split("");
  return test.filter(function (val, index) {
    return (test[index - 1] !== 'a' || test[index - 1] !== 'b') && (test[index - 2] !== 'a' || test[index - 2] !== 'a') && (test[index - 3] === 'a' || test[index - 3] === 'b') && (val === 'a' || val === 'b');
  });
}


var test = ABCheck('abbcc');

if (test > 0) {
  console.log(true);
} else {
  console.log(false);
}


//class solutions