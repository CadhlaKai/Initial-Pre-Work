/**Notes:
 * using the spread operator ... we can account for all remaining elements in an array
 
 Original:
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  (function() {
    "use strict";
    arr2 = []; // change this line
  })();
  console.log(arr2);
 */

//Solution
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
