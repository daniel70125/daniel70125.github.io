/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1.To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2.There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 3.There are three types of variables, 1,var, 2.let, and 3.const....
 *
 * 4.Variables are all hoisted differently, which can affect the whole file...
 *
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 *  We've been using the 'var' keyword so far, but there are 2 other types of
 *  variables as mentioned on line 14 ! const and "let" are both just like 
 *  the "var" keyword but they all differ, lets see how!
 */

/*
 *
 *  The keyword "let" gets assigned the same way that "var" does with the '='.
 *  operator. Unlike the var keyword once you assign it using the keyword 'let' 
 *  you cannot re-assign it using the 'let keyword again'
 *
 */



var x = 10;
// Here x is 10
var x = 20;
// Here x is 20

let y = 10;
// Here y is 10;
let y - 20; 
// Here you get a 'Syntax Error' because it has already been declared ...

/*
 *
 *  This is beneficial to the programmer because it lets them know that a variable
 *  with that name has already been created. That doesnt mean that you cant  
 *  reassign stuff to it, instead of using let just use the variable's name and
 *  reassign it that way!
 */

let z = 10;
// Here z is 10
z = 20;
// Here z is 20
// NOTE - imagine reassigning a variable that you didnt know existed, yikes!!

/*
 *
 *  The keyword 'const' is, in my own words, strict when it comes to its values;
 *  Just like the 'let' keyword, 'const' CANNOT be reassigned by using the 'const'
 *  keyword.
 *  
 */

const c = 10;
// Here c is 10
const c = 20;
// Here you get a 'Syntax Error' because it has already been declared ...

 // The key diffence is that unlike 'let', it cannot be reassigned AT ALL with
 // or WITHOUT the 'const' keyword.
 
const PI = 3.141592653589793;
const PI = 3.14;      // This will give an error
PI = 10;              // This will also give an error


// -- HOISTING: Hoisting is the JavaScript interpreter's action of moving all 
//  variable and function declarations to the top of the current scope.

/*
 *  Hoisting affects how javascript will interpret the code from the beginning of the file.. 
 *  Hoisting is helpfull when knowing if variables are created somewhere in the
 *  file and at which point they're created. Hoisting is JavaScript's default 
 *  behavior of moving all declarations to the top of the current scope
 *
 */

console.log(x); // returns 'undefined'! because x is created somewhere but hasn't been assigned yet at this point.
var x = 10; // First assignment of the variable. NOW the computer will recognize the number 10...
console.log(x); // Returns '10' because now var x has been assigned to a value (Line 113) !

/*
 *  Lets say lines 114 to 117 were the only lines of code in this file, well because 
 *  of hoisting, the interpreter reads this as if the code was as such ...
 *  
 *  var x;
 *  console.log(x);
 *  var x = 10;
 *  console.log(x);
 *
 *  Because of hoisting, that variable is brought top the top of the file in memeory
 *  now it can recognize that variable is created somewhere..
 */


// Variables and constants declared with let or const are not hoisted!
// In other words, when using 'let' or 'const', it wont be recognized until it 
// is declared. 

console.log(notHoisted); // => 'undefined';
let notHoisted = 100; // NOW the os will recognize 'notHoisted' as a variable...
console.log(notHoisted); // => '100'; 

console.log(notHoisted); // => 'undefined';

const notHoisted = 100; // => You will get an error telling you that this 
                        //    variable has already been created
                        
console.log(notHoisted); // => '100'; 



/*
 *  
 *  Rememeber that 'hoisting' is just the process of bringing all declarations (like var x;)  
 *  up to the top of the file before going through the code a second time. It becomes
 *  a usefull tool as your file gets bigger and you forget exactly what you've
 *  created already. Remember repetition is BAD coding practice !!
 */










