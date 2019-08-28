/*  
 *  There are 9 different data types all of which can be used to your advantage.
 *  All of them can be used to distinguish between when trying to figure out if
 *  a value converts to another value for ex...
 *  
 *
 *  For exmample does it make any sense to add the word "Volvo" to the 
 *  number sixteen? EXACTLY!
 *  
 **/
 
    // -- NUMBER datatypes are the same basic math numbers you're used to.

var numberDatatype = 23; // => 'number'
var numberDatatype2 = 10; // => 'number'
var number2String = '23'; // => string , continue below to understand why it returns back 'string';

/*
 *  -- STRING datatypes are basically words. Once you put "" or '', everything
 *  in between that instantly becomes a string. 
 */
 
var stringDatatype = "Hello"; // => Simple text string;
var stringDatatype = "Hello" + " " + "23"; // => "Hello 23" as one string.

/*
 *  -- BOOLEAN datatypes will either return 'true' or 'false' no matter what.
 *  Booleans are often used in conditional testing.
 */

var x = 5;
var y = 10;
var z = 5;
x === y; // => returns false, because x = 5 and y = 10 which are NOT equal in comparison;
x === z; // returns true, because x= 5 and z = 5 which are BOTH EQUAL in comparison;

/* 
 *  -- ARRAY datatypes are written with square brackets.
 *  Array items are separated by commas. They can also hold other data types;
 *  Arrays are also start at number 0 instead of 1 as they're zero indexed;
 *  This will be helpful to remember when accessing specific items in an array.
 */
 
var array = []; // Arrays can be created for later use BEFORE adding values to it; 

// Once created you can use the .push() method to add values to them..
array.push(23);
// Added the value '23', now the variable array looks like [23] instead of []; 
array.push("Hello"); 
// Now the array looks like [23, 'hello'];


// You can access specific values in an array by BRACKET NOTATION only ! 
array[1]; /* => 'Hello', because remember arrays are zero-indexed meaning they
start at 0 = [23], so 1 = ["Hello"]; */
/*
 *  There are many different meethods like .push() to manipulate an array.
 *  DONT FORGET an array is made with the square brackets '[]' and can be used
 *  searched for specific vaues inside an array as such array[1]; !
 *  
 */

/* 
 *  -- OBJECT datatypes are written with curly braces {}, unlike array datatypes
 *  which are enclosed with the '[]' brackets. Objects have 'key:value' pairs
 *  unike arrays which are zero-indexed..
 *  You can access specific values and create them in an object by BOTH BRACKET NOTATION and 
 *  DOT NOTATION !
 */
 
 var myObj = {}; // Declaring my object with no values yet for later use. 
 // Notice the '{}' which tells the interpreter this var will be an object...
 
 // Creating an object with "key: value pairs".
 var otherObj = {
     name: "daniel",
     age: 23
 }; // => otherObj { name: "daniel;", age: "23"};
 
/*
 *  Now otherObj has two 'KEYS' which are like variables, they hold the 'PAIRS'
 *  "daniel" and a number 23 when accessing them;
 */

// -- DOT NOTATION to create and access a value...
// DOT NOTATION to create a value
myObj.firstName = "Jordan";
// => myObj now has a KEY of 'firstName' with the VALUE of 'Jordan' now !

// DOT NOTATION to acess the firstName value..
console.log(myObj.firstName); // => 'Jordan';

// -- BRACKET NOTATION to create and access a value...
// BRACKET NOTATION to create a value ...
myObj[lastName] = 'Peele';
// => myObj now has a KEY of 'lastName' with the VALUE of 'Peele' now !

// BRACKET NOTATION to access the firstName value..
console.log(myObj[firstName]); // => 'Jordan';

/* 
 *  -- FUNCTION datatypes are a block of code designed to perform a particular task.
 *  A Function is executed when "something" invokes it (calls it), by
 *  Functions are defined with the 'function' keyword, followed by a name, 
 *  followed by parentheses (). Function parameters are listed inside the 
 *  parentheses () in the function definition.
 *
 */

// This is how a function is set up..
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

// Creating a real javascript function..
function myFunction(One, Two) {
  return One * Two;   // The function returns the product of One and Two.
}

// Functions are invoked by using parentheses after the function name..
console.log(myFunction()); // => 'NaN' because you have to use parameters for the interpreter to evaluate..
console.log(myFunction(1, 2)); // => '2'; The interpreter does 1 * 2 which = '2' ;

/* 
 *  -- UNDEFINED datatypes are variables without a value. 
 *  NOTE an empty value has nothing to do with undefined.
 */

var x;
console.log(x); // => 'undefined' because a variable has been created, but no values are in it;

var x = 10;
console.log(x); // => '10'. now x has some values in it.

var y = '';
console.log(y); // => ' '. Y technically isn't empty because it has a space character in it!

/* 
 *  -- NULL datatypes are basically "nothing". It is supposed to be something that doesn't exist.
 *  In JavaScript, the data type of null is an object as opposed to 'undefined';
 *  A variable can also be emptied of its current contents by assigning it the null value.
 */

var a = null;
console.log(a); // => 'null'
 
var b = "Hello World!";
console.log(b); // => 'Hello World!''
 
b = null;
console.log(b); // => 'null'

/* 
 *  -- NaN datatypes represent 'Not a Number'. Self explanatory, anything that 
 *  isn't a number.
 */

// There's a function called 'isNaN' that checks if something is a number or not. 
// Lets see some examples of what the outputs would be when inserting some examples..

console.log(isNaN(23)); // => 'true' 
console.log(isNaN(100)); // => 'true'
console.log(isNaN('23')); // => 'false'
console.log(isNaN({})); // => 'false'


/* 
 *  -- INFINITY is a numeric value that represents positive infinity.
 *  -Infinity is the inverse of 'inifinity' meaning it represents a  negative infinity.
 *  Infinity and -Infinity are both displayed when a number exceeds the upper limit 
 *  or the lower limit of the floating point numbers..
 */
// Lets see an example...
console.log(1.7976931348623157E+10308 + " " + -1.7976931348623157E+10308); // => 'Infinity -Infinity'


/* 
 *  -- SIMPLE and COMPLEX datatypes have two main differences. Simple datatypes 
 *  are immutable, meaning they do not hold, collect or aggregate other values.
 *  Operations on simple values return new simple values. They also copy by value,
 *  data is copied from one value to the next. A primitive is not an object and 
 *  has no methods of its own.
 */
 
 /* 
 *  Some examples of primiive data types...
 *  Boolean — true or false
 *  Null — no value
 *  Undefined — a declared variable but hasn’t been given a value
 *  Number — integers, floats, etc
 *  String — an array of characters i.e words
 *  Symbol — a unique value that's not equal to any other value
 */

// Example of copying by value..
var a = 5;
var b = a; // Changing the value at b doesn't affect 'a' - SIMPLE
console.log(a); // => '5'
console.log(a); // => '5'



/* 
 *  -- COMPLEX datatypes aggregate other values and therefore are of indefinite size,
 *  They are also copied by reference, not by value like simple datatypes.
 *  Using the typeof operator can return one of two complex types: 'function' or 'object'
 *  The typeof operator returns "object" for objects, arrays, and null.
 */

var a = {one: 'Jordan'};

/* 
 *  Here, the value stored in b is a REFERENCE to the value stored in a, now they
 *  both point to the SAME OBJECT!
 */

var b = a;
// Changing something in b will affect a because both are referencing the same object..

b.one = 'bar';
console.log(a.one); // => 'bar';