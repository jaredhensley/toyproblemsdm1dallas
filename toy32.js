// Today you'll write a function that determines the best place to buy 10gal of gas.
// You'll be given an array of objects like: {name, pricePerGal, xDist, yDist}, a starting point, and the mpg of a car.
// You are tasked with writing a function that will take in the array and determine which gas station is the best deal based on the cost it takes to get there in addition to the 10 gallons of gas you will buy there.
// The function will return an object with the {stationName, totalCost, distanceTraveled}
var stations = [
  {
    stationName: 'Qwikee Mart',
    pricePerGal: 1.60,
    xDist: 5,
    yDist: 2
  },
  {
    stationName: 'Gas Shoppee',
    pricePerGal: 1.45,
    xDist: 15,
    yDist: 7
  },
  {
    stationName: 'Fuel Up',
    pricePerGal: 1.58,
    xDist: 10,
    yDist: 2
  },
  {
    stationName: 'Flying K',
    pricePerGal: 1.50,
    xDist: 10,
    yDist: 3
  },
  {
    stationName: 'Qwikee Mart',
    pricePerGal: 1.50,
    xDist: 8,
    yDist: 4
  },
];

function cheapest(arr) {

  var blines = [];
  var cheapestYAY = 50;
  var cheapestStation = '';

  (function bLine(arr) {
    var distance = 0;
    var distancex = 0;
    var distancey = 0;
    var arrOfBlines = [];
    arr.forEach(function (value, index) {
      for (prop in value) {
        distancex = value.xDist;
        distancey = value.yDist;
        distance = (distancex * distancex) + (distancey * distancey);
        distance = Math.sqrt(distance);
        console.log(arrOfBlines);
        console.log(distance);
      }
      blines.push(distance);
    });
    cheapestGas(arr);
  })(arr);

  function cheapestGas(arr) {
    arr.forEach(function (value, index) {
      var bLineDistance = blines[index];
      var gasPriceAtStation = value.pricePerGal;
      var tenGallons = gasPriceAtStation * 10;
      var costOfTripToStation = bLineDistance / gasPriceAtStation;
      var totalCost = gasPriceAtStation + costOfTripToStation;
      console.log(totalCost);
      if (totalCost < cheapestYAY) {
        console.log(cheapestYAY);
        console.log(totalCost);
        cheapestYAY = totalCost;
        cheapestStation = value.stationName;
      }
    });

  }
  console.log('STATION NAME': cheapestStation);
  console.log('PRICE': cheapestYAY);
  return cheapestYAY;

}
/*[9:06] 
Starting point at 0,0 and 13mpg

[9:06] 
(x,y) obvs*/