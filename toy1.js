function combinator(arr1, arr2) {

  var users = [];

  for (var i = 0; i < arr1.length; i++) {
    users.push(arr1[i] + ' ' + arr2[i]);
  }

  return users;

}

//do this with .map too