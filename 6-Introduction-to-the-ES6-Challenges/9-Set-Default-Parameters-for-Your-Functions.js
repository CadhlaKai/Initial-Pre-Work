/**Notes:
 * default parameters can be placed into a function
 * this way there will always be a result instead of a common error.

Original:
  const increment = (function() {
    "use strict";
    return function increment(number, value) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6
*/

//Solution
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
