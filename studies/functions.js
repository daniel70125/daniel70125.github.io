/* 
 * FUNCTIONS:
 * 
 * 0. FUNCTION are a block of code designed to perform a particular task.
 *  
 * 1. A Function is executed when "something" invokes it (calls it).
 *
 * 2. Functions are defined with the 'function' keyword, followed by a name, 
 *    followed by parentheses (). Function parameters are listed inside the 
 *    parentheses () in the function definition.
 *
 * 3. We can also assign functions to variables for other use.
 *  
 * 4. JavaScript variables can belong to the local or global scope.
 *    Global variables can be made local (private) with closures.
 */
 
 // First we must declare a function using the 'function' keyword, then execute a function
 // by invoking it using parentheses ().
 
 // This is how a function is set up..
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

/*
 *  Function parameters are the names listed in the function definition. You can think
 *  of parameters as placeholders for unknown values that will be used later on this function
 *
 *  Function arguments are the values received by the function when it is invoked.
 *  Function arguments are the real values passed to (and received by) the function.
 *
 */
 
// Creating a real javascript function..
function myFunction(One, Two) {
  return One * Two;   // The function returns the product of One and Two.
}
myFunction(2, 2); // => '4'; 2 and 2 are both ARGUMENTS passed to the myFunction function.


// Functions are invoked by using parentheses after the function name..
console.log(myFunction()); // => 'NaN' because you have to use parameters for the interpreter to evaluate..
console.log(myFunction(1, 2)); // => '2'; The interpreter does 1 * 2 which = '2' ;

// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable..

var x = function (a, b) {return a * b};
// var x now has a function passed to it

var z = x(4, 3);
// Now z has the function that was passed to x;
console.log(z); // => '12'
// z = function(4, 3) {return 4 * 3};

// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.

function noInputs() {
    return "Hello"; 
}
noInputs(); // => 'hello'
// If no inputs are created, function will rely on body code
var arr = ["hello", 23];
function moreOutputs() {
    return arr;
}
moreOutputs(); // => '["hello", 23]'
// Functions can output whatever data needed, from arrays to objects!

// Function scope can get complicated and cause errors if not hanlded correctly
// Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

var boatname = "Yacht"
// code here can NOT use carName
// code here can use boatName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
  // code here CAN use boatName
}

// code here can NOT use carName
// code here can use boatName

// NOTE! Functions can access parent scopes but parent scopes cannot use data in child scopes.

/*
 *  Global variables can be made local (private) with closures.
 *  A function can access all variables defined inside the function, like this:
 *  Local variables have short lives. They are created when the function is invoked, 
 *  and deleted when the function is finished.
 */
function myFunction() {
  var a = 4;
  return a * a;
}

// But a function can also access variables defined outside the function, like this:

var a = 4;
function myFunction() {
  return a * a;
}
// In the last example, a is a global variable. In the first example, a is a local variable.
// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

var counter = 0; // Initiate counter

function add() {
  counter += 1; // Function to increment counter
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
// There is a problem with the solution above: Any code on the page can change the counter, without calling add().

// Lets fix this ! ...

// Function to increment counter
function add() {
  var counter = 0; 
  counter += 1;
  return counter;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3. But it is 1.
// It did not work because we reset the local counter every time we call the function.

// A JavaScript inner function can solve this.
function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();    
  return counter; 
}
// We also need to find a way to execute counter = 0 only once. We need a closure.

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();
// the counter is now 3

/*
 *  1. Add is assigned the return value of a self-invoking function.
 *  2. The self-invoking function only runs once. It sets the counter to zero (0),
 *     and returns a function expression. This way add becomes a function.
 *  3. This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
 *  NOTE - A closure is a function having access to the parent scope, even after the parent function has closed.
 */