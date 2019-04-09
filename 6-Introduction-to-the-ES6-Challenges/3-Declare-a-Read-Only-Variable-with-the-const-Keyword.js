/**Notes
   * const variables
   *  - are read only
   *  - cannot be reassigned.
   *  - are usually all uppercase.

Original:
  function printManyTimes(str) {
    "use strict";
    var sentence = str + " is cool!";
    for(var i = 0; i < str.length; i+=2) {
      console.log(sentence);
    }
  }
  printManyTimes("freeCodeCamp");
*/

//Solution
function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");
