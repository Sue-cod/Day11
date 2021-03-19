var myArray = [[2], [5, 6, 7], [8, 9]]; 
var myArray2 = [[2.5, 2], [0.5, 0.2], [8]]; 
var myArray3 = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];
// Only change code below this line
function multiplyArrayFunction(myArray) {
    var product = 1;
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
      for (var j = 0; j < myArray[i].length; j++) {
        product *= myArray[i][j];
        sum += myArray[i][j];
      }
    }
    return [product, sum];
  }
  // Only change code above this line
  console.log(multiplyArrayFunction(myArray3)); // Change this line
  module.exports = multiplyArrayfunction;