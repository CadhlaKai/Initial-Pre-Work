/**Notes
   * Though const variables are read-only and cannot be reassigned,
   * any mutable object declared with const is still mutable

Original:
  const s = [5, 7, 2];
  function editInPlace() {
    "use strict";
  }
  editInPlace();
*/

//Solution
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
