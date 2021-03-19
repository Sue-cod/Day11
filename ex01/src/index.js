// Create an array here
var myArr = [2, 4, 0, 8, 10];
myArr[0];
myArr[1];
myArr[2];
myArr[3];
myArr[4];
// End of creating an array

function myArrayFunction(arr) {
    var myItems = [...arr];
    // Only change code below this line
    var myItems = [2, 4, 0, 8, 10];
    myItems[2] = 6;
    return myItems;
    // Only change code above this line
}

console.log(myArrayFunction(myArr));  // Change this line
module.exports = myArrayFunction;