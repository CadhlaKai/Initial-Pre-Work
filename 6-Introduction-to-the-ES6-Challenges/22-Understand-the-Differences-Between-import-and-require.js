/**Notes:
 * require() used to be used to import an entire module or code from external files.
 * But it loads the whole module, which causes speed and loading issues if the file is too large.
 * import allows us to pick and choose what we want to import from an external file or module,
 * which greatly reduces load times and improves performance.

 Original:
    "use strict";
    capitalizeString("hello!");
 */

//Solution
"use strict";
import {capitalizeString} from "string_functions"
("hello!");