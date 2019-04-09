/**Notes"
 * get allows us to obtain values from an object.
 * set allows us to set a value of a property within an object.
 */

/**
 * Original:
    function makeClass() {
        "use strict";
    /* Alter code below this line

    /* Alter code above this line
        return Thermostat;
    }
    const Thermostat = makeClass();
    const thermos = new Thermostat(76); // setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in C
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in C

 */

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(fahrenheit) {
            this.fahrenheit = fahrenheit;
        }

        get temperature() {
            return 5 / 9 * (this.fahrenheit - 32);
        }

        set temperature(celcius) {
            this.fahrenheit = celcius * 9.0 / 5 + 32;
        }
    }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C