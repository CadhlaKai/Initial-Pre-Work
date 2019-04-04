//Combine what was learned about if else statements, logical operators,
//strings, variables, concatenation, and so on to create a simple card counting function.

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count = count + 1;
  } else if (card == 7 || card == 8 || card == 9) {
    count = count + 0
  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    count = count - 1
  }

  if (count > 0) {
    return count + " Bet"
  } else {
    return count + " Hold"
  }
  return count;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
