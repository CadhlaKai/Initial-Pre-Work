//We can add a default value, in case the input value isn't listed as a case.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
    answer = "stuff";

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
