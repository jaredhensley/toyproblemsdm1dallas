//there is an array of negative number integers.  A second array is formed by shuffling the elements of the first array and deleting a rnadom element.  Given these two arrays, find which element is missing in the second array.

var set1a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var set1b = [9, 4, 2, 1, 7, 5, 6, 3];

function findMissingElement(arr1, arr2) {

  for (var i = 0; i < arr1.length; i++) {
    /*    console.log(arr2[i]);
        console.log('test', arr1.indexOf(arr2[i]));*/
    if (arr1.indexOf(arr2[i]) >= 0) {
      console.log('in there');
    } else {
      console.log('didnt work');
      return console.log(i);

    }

  }

}

findMissingElement(set1a, set1b);