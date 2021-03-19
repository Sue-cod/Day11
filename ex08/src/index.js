// Only change code below this line
var testArr = ['hello', 'hey'];
var testArr1 = ['zyxwvutsrqponmlkjihgfedcba', 'qrstu'];
var testArr2 = ['Mary', 'Army'];
var testArr3 = ['Mary', 'Aarmy'];
var testArr4 = ['Alien', 'line'];
var testArr5 = ['floor', 'for'];
var testArr6 = ['Hello', 'neo'];
var testArr7 = ['voodoo', 'no'];
var testArr8 = ['ate', 'date'];
var testArr9 = ['Tiger', 'Zebra'];
var testArr10 = ['Noel', 'Ole'];


function myMutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function (char) {
      return arr[0].toLowerCase().indexOf(char) != -1;
    });
}
// Only change code above this line
console.log(myMutation(testArr));
console.log(myMutation(testArr1));
console.log(myMutation(testArr2));
console.log(myMutation(testArr3));
console.log(myMutation(testArr4));
console.log(myMutation(testArr5));
console.log(myMutation(testArr6));
console.log(myMutation(testArr7));
console.log(myMutation(testArr8));
console.log(myMutation(testArr9));
console.log(myMutation(testArr10)); // Change this line
module.exports = myMutation;