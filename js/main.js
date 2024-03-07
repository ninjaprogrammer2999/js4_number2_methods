// Number methods

const myNumber = 100;
const myFloat = 100.019838;
const myString = "100";
// isInteger method which checks whether the number is integer or not
console.log(Number.isInteger(myString));
//*******************************************************************
/* parseFloat method = this method parses an argument and returns 
a float point number. If a number cannot be parsed from argument, 
it returns NaN. */
console.log(Number.parseFloat(myString));
//*******************************************************************
/* toFixed method = formats a number according to how many decimal 
points provide as the parameter */
console.log(myFloat.toFixed(2));








