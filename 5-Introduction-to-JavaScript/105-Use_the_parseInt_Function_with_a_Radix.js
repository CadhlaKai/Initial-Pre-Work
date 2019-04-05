//radix specifies the base of the number in the string (between 2 and 36)
// parseInt(string, radix)

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
