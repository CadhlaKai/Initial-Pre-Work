/**Notes:
 * The function keyword and the colon can be ignored when
 * defining a function within an object.
 */

/**
 * 
Original:
  // change code below this line
  const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
 */

//Solution:
// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);