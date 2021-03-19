// Only change code below this line
var testArr = ['hello', 'hey'];
var testArr1 = ["hello", "Hello"];
var testArr2 = ['zyxwvutsrqponmlkjihgfedcba', 'qrstu'];
var testArr3 = ['Mary', 'Army'];
var testArr4 = ['Mary', 'Aarmy'];
var testArr5 = ['Alien', 'line'];
var testArr6 = ['floor', 'for'];
var testArr7 = ['Hello', 'neo'];
var testArr8 = ['voodoo', 'no'];
var testArr9 = ['ate', 'date'];
var testArr10 = ['Tiger', 'Zebra'];
var testArr11 = ['Noel', 'Ole'];


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
console.log(myMutation(testArr10));
console.log(myMutation(testArr11)); // Change this line
module.exports = myMutation;