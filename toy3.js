//write a function called reverse that takes in a string and reverses that string without using .reverse() on the Array's prototype.

function reverseStr(str) {

  var returnedStr = [];
  str.split("");

  for (var i = 0; i < str.length; i++) {
    returnedStr.unshift(str[i]);
  }

  var reorder = returnedStr.join("");
  return reorder;
}