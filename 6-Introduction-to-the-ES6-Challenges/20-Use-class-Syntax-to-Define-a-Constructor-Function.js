/**Notes:
 * Class syntax allows us to create a new object.
 */

/**
Original:
    function makeClass() {
        "use strict";
    /* Alter code below this line

    /* Alter code above this line
        return Vegetable;
    }
    const Vegetable = makeClass();
    const carrot = new Vegetable('carrot');
    console.log(carrot.name); // => should be 'carrot'
 */

//Solution
function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    /* Alter code above this line */
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'