/*
 * OPERATORS:
 *
 * 0. ASSIGNMENT operators assign a value to its left operand based on the value of its right operand.
 *
 * 1. ARITHMETIC operators are used to perform arithmetic (Addition, Subtraction, etc...)
 *    between variables and/or values. 
 *
 * 2. COMPARISON operators compare values. For ex. true or false, less than, greater than,
 *    etc...
 *
 * 3. There are three LOGICAL operators in JavaScript: || (OR), && (AND), ! (NOT).
 *
 * 4. A UNARY operation is an operation with only one operand. 
 *  
 * 5. The conditional (TERNARY) operator is the only JavaScript operator that takes three operands.
 */
 
// -- ASSIGNMENT operators...
// The = assignment operator assigns a value to a variable.
 var x = 10;

// The += assignment operator adds a value to a variable.
var x = 10;
console.log(x); // => '10' 
x += 5;
console.log(x); // => '15'

// The -= assignment operator subtracts a value from a variable.
var x = 10;
console.log(x); // => '10'
x -= 5;
console.log(x); // => '5'

// The *= assignment operator multiplies a variable.
var x = 10;
console.log(x); // => '10'
x *= 5;
console.log(x); // => '50'

// The /= assignment divides a variable.
var x = 10;
console.log(x); // => '10'
x /= 5;
console.log(x); // => '2'

// The %= assignment operator assigns a remainder to a variable.
var x = 10;
console.log(x); // => '10'
x /= 5;
console.log(x); // => '0'

// -- ARITHMETIC operators...
// The addition operator (+) adds numbers
var x  = 5;
var y = 5;
console.log(x + y); // => '10'

// The subtraction operator (-) subtracts numbers.
var x = 5;
var y = 5;
console.log(x - y); // => '0'

// The multiplication operator (*) multiplies numbers.
var x = 5;
var y = 5;
console.log(x * y); // => '25'

// The division operator (/) divides numbers.
var x = 10;
var y = 2;
console.log(x * y); // => '5'

// The modulus operator (%) returns the division remainder.
var x = 5;
var y = 2;
console.log(x % y); // => '1'

// -- COMPARISON operators..
/*
 *  -- The equality operator (==) converts the operands if they are not of the same type, 
 *  then applies strict comparison. If both operands are objects, then JavaScript 
 *  compares internal references which are equal when operands refer to the same
 *  object in memory.
 *
 */
 
console.log(1 == 1); // true
console.log('1' ==  1); // true
console.log(1 == '1'); // true

/*
 *  The inequality operator returns true if the operands are not equal.
 *  If the two operands are not of the same type, JavaScript attempts to convert
 *  the operands to an appropriate type for the comparison.
 */

console.log(1 == 1); // true
console.log('1' ==  1); // false
console.log(1 == '1'); // false

/*
 *  The identity operator returns true if the operands are strictly equal with no 
 *  type conversion.
 */

console.log(1 === 1); // true
console.log('1' ===  1); // false
console.log(1 === "1"); // false

// The non-identity operator returns true if the operands are not equal and/or not of the same type.
console.log(3 !== '3'); // true
console.log(4 !== 3);   // true


// -- There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
// If any of its arguments are true, it returns true, otherwise it returns false.

var hour = 9;
function isHour() {
if (hour < 10 || hour > 18) {
  console.log(true);
}}
isHour(); // => 'true', because hour is less than 10.. 

// The AND (&&) operator returns true if both operands are truthy and false.

var hour = 12;
var minute = 30;
function isBoth() {
if (hour == 12 && minute == 31) {
  console.log( 'The time is 12:30' );
} else {
    console.log(false);
}}

isBoth(); // => 'false', BOTH conditions have to be true, and only one was true

// The boolean NOT operator is represented with an exclamation sign !.

var time = 12;
function isNot() {
    if (time != 12) {
        console.log(false);
    } else {
        console.log(true);
    }
}
isNot(); // => 'true', time is 12!

// -- Examples of UNARY operators have that only one operand..
var i = 1;
console.log(typeof 1); // => 'number'
console.log(typeof 'Daniel'); // => 'string'
console.log(!true); // => 'false'


// -- The TERNARY operator takes a condition, a expression for if something is 
//  true and an expression if something is false.

function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00"); 
}
// If IsMember is true it will result to true conditions or false if they 'aren't' a member. 

console.log(getFee(true)); // => "$2.00" 
console.log(getFee(false)); // => "$10.00"
console.log(getFee(1)); // => '$2.00'