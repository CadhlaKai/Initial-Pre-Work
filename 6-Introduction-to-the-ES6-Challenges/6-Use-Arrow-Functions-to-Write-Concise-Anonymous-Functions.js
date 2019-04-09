/**Notes:
 * arrow function syntax allows us to shorten anonymous functions
 
Original:
  var magic = function() {
    "use strict";
    return new Date();
  };
*/

//Solution
const magic = () => {
  "use strict";
  return new Date();
};
