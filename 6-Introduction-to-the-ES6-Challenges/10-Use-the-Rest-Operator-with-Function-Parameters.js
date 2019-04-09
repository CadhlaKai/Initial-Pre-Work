/**Notes:
 * the rest operator ... can be put as a prefix on the last parameter to indicate
 * that infinite args can be given.
 
 Original:
  const sum = (function() {
    "use strict";
    return function sum(x, y, z) {
      const args = [ x, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6
 */

//Solution
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
