/**Notes:
 *export works in conjunction with import.
 export allows us to use a block of code in another file.

    export { capitalizeString } //How to export functions.
    export const foo = "bar"; //How to export variables.

 Original:
    "use strict";
    const foo = "bar";
    const bar = "foo";
 */

//Solution
"use strict";
export const foo = "bar";
export const bar = "foo";