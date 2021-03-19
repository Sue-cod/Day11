// Only change code below this line
var testArr = ['a', 'b', 'c', 'd'];
var testArr1 = [0, 1, 2, 3, 4, 5, 6];

function splitArrayInGroups(arr, n) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += n) {
    newArr.push(arr.slice(i, i + n));
  }
  return newArr;
}

// Only change code above this line

console.log(splitArrayInGroups(testArr, 2)); // Change this line
module.exports = splitArrayInGroups;