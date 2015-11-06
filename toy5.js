/*write a function called simpleSymbols that takes in a string paramter and determines if it is an acceptable seuqnece by either returning true or false.  the str parameter will be composed of + and = symbols with several letters between them.  for the results to be true, each letter must be surrounded by a + symbol.*/

function simpleSymbols(str) {
  var plu = '+';
  var eq = '=';
  var check = true;

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== plu || str[i] !== eq) {
      if (str[i - 1] === plu && str[i + 1] === plu) {
        check = true;
      } else {
        check = false;
      }
    }
  }
  return check;
}