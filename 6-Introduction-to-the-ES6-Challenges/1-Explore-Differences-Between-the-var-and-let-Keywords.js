//var variables can be overwritten
//let variables will give an error if you try to overwrite them

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
