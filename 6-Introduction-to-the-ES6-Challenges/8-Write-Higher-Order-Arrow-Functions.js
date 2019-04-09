/**Notes:
 * arrow function syntax allows us to simplify complex functions and write fewer lines of code.

Original:
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
  const squareList = (arr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = arr;
    // change code above this line
    return squaredIntegers;
  };
  // test your code
  const squaredIntegers = squareList(realNumberArray);
  console.log(squaredIntegers);
*/

//Solution
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
