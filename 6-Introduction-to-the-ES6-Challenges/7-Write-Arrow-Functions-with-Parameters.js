/**Notes:
  * arrow function syntax allows us to pass arguments into it,
  * similar to a normal function.

Original:
  var myConcat = function(arr1, arr2) {
    "use strict";
    return arr1.concat(arr2);
  };
  console.log(myConcat([1, 2], [3, 4, 5]));
*/

//Solution
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
