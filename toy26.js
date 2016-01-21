//create a function leonardo that takes a string and returns an object that has a property vowelCount, length, and a reversed property, which is the string reversed. 

function leonardo(str) {
  var str = str;

  function length(str) {
    console.log(str);
    this.theLength === str.length;

  }



  return {
    vowelCount: 0,
    theLength: length,
    reversed: 'poop'
  }
}

var test = leonardo('poop');
console.log(test.theLength);