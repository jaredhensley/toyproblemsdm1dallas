function randomGen() {
  return Math.floor(Math.random() * 60) + 1;
}

function sixRandomNums() {
  var arrOfSix = [];
  for (var i = 0; i < 6; i++) {
    arrOfSix.push(randomGen());
  }
  return arrOfSix;
}

var interestingArray = sixRandomNums();

function powerBallCountdown() {
  "use strict";
  for (var i = interestingArray.length - 1; i >= 0; i--) {
    let j = i
    console.log(i);
    setTimeout(function () {
      console.log(interestingArray[j]);
    }, i * 1000);
  }
}