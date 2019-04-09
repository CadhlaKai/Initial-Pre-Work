/**Notes:
 * export default declares a fallback value to be exported
 * export default is only used when one value is being exported
 * export default cannot be used with var, let, or const

Original:
  "use strict";
  function subtract(x,y) {return x - y;}
 */

//Solution
"use strict";
export default function subtract(x,y) {return x - y;}