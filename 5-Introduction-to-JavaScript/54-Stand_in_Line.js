//It took me a long time to complete this because I forgot to add the () after shift and had touble figuring it out.
//I should be more careful.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var num1 = arr.shift();
  return num1;
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([2,1])); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
