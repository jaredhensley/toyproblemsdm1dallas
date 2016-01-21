//Description: you have three arrays of usernames where some values in the arrays are common between the three. You need an array of only the shared values
var usernames_1 = ['joe', 'jake23', 'urusdki', 'shareuei', 'walterwhite'];
var usernames_2 = ['jake23', 'jj25ll', 'urusdki', 'jakethesnake'];
var usernames_3 = ['barackobama', 'georgew', 'abelincoln', 'jake23'];
//Problem hint: Underscore's 'intersection' function
/*var intersect = _.intersection(usernames_1, usernames_2, usernames_3);
console.log(intersect);*/

function intersection(arr1, arr2, arr3) {
  var filterArrOne = arr2.filter(function (el) {
    return arr1.indexOf(el) >= 0;
  });
  var filterArrOneTwo = filterArrOne.filter(function (el) {
    return arr3.indexOf(el) >= 0;
  });

  return filterArrOneTwo;

}

intersection(usernames_1, usernames_2, usernames_3);