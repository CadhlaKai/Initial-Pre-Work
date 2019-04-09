/**Notes:
 * Deconstructing arrays allows us to choose which elements we want to reassign.

 Original:
  let a = 8, b = 6;
  (() => {
    "use strict";
    // change code below this line
    
    // change code above this line
  })();
  console.log(a); // should be 6
  console.log(b); // should be 8
 */

//Solution
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
