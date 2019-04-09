/**Notes
 * let variables will only exist where they are created.
 *  - exist in a function when declared in a function
 *  - exist in a block when declared in a block
 *  - exist globally when declared globally

 Original:
  function checkScope() {
    "use strict";
      var i = "function scope";
      if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
  */

//Solution
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
