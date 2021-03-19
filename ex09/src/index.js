// Only change code below this line
var testArr = [7, "ate", "", false, 9];
var testArr1 = ["a", "b", "c"];
var testArr2 = [false, null, 0, NaN, undefined, ""];
var testArr3 = [null, NaN, 1, 2, undefined];

function myBouncer(arr) {
  return arr.filter(Boolean);
}
// Only change code above this line
console.log(myBouncer(testArr)); // Change this line
console.log(myBouncer(testArr1));
console.log(myBouncer(testArr2));
console.log(myBouncer(testArr3));
module.exports = myBouncer;