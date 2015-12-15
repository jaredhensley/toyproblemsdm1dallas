//create a function that can be invoked n number of times

function invoker(cake, limit) {

  var n = 0;

  if (limit >= n) {

    cake();
    console.log(n);
    n++;
  } else {
    console.log("no dice");
  }

}

function test(limit) {
  console.log('hello');
}

var poop = invoker(test, 3);

poop;