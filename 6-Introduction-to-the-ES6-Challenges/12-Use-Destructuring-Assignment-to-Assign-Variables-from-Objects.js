/**Notes:
 * We can deconstruct an array to get a specific value and assign it to a variable.
 
 Original:
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };

  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const tempOfTomorrow = undefined; // change this line
    // change code above this line
    return tempOfTomorrow;
  }

  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
 */

//Solution
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
