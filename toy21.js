function counter() {
  var count = 0;
  return function () {
    count++
    var delay = count * 1000;
    setTimeout(function () {
      console.log(count);
      console.log('delay: ' + delay + ' ms');
    }, count * delay);
  }
}

var c = counter();