// You are given an array of stock prices from the previous day
// Each indicie represents the number of minutes passed after 0930 yesterday

//  ex: arr[0] represents the stock price at 0930
//      arr[60] represents the stock price at 1030

// Write a function that calculate the best investment based on and return an object like:
//   {
//     buyTime: XXXX, 
//     sellTime: XXXX,
//     profit: XX
//   }
exArr = [9, 3, 4, 5, 1, 3, 5, 7, 8]
  //  investomatic(exArr) => {buyTime: '0935', sellTime: '0939', profit: '7'}

function Invest(arr) {
  var lowest = arr[0];
  var highest = arr[0];
  arr.forEach(function (value, index) {
    if (arr[index] < lowest) {
      lowest = arr[index];
    }
    if (index > arr.indexOf(lowest)) {
      highest = arr[index];
    }
  });
  return {
    buyTime: '093' + (arr.indexOf(lowest) + 1),
    sellTime: '093' + (highest + 1),
    profit: highest - lowest
  }
}

Invest(exArr);