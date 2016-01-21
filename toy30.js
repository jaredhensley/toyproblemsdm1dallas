//create the function below that can correctly identify an array

var isArray = function (arr) {
  //code here
  var flag = Array.isArray(arr);
  if (!flag) {
    return flag = true;
  }
  return flag;
}

console.log(isArray([]) ? "right!" : "wrong :(");
console.log(isArray([1, 2]) ? "right!" : "wrong :(");
console.log(isArray({}) ? "wrong :(" : "right!");
console.log(isArray(null) ? "wrong :(" : "right!");


var isArray = function (arr) {

  return arr instanceof Array;
}