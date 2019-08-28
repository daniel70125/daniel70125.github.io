/*
 * LOOPS:
 *
 * 0. Loops can execute a block of code a number of times.
 *  
 * 1. Loops are handy, if you want to run the same code over and over again,
 *    each time with a different value.
 *  
 * 2. There are while, for, and for-in loops all usable to programmers.
 *
 * 3. You can loop over objects, arrays, strings, etc...
 */
 
 // -- The WHILE loop loops through a block of code as long as a specified condition is true.
 while (i < 10) {
  text += "The number is " + i;
  i++;
 }
/*  
 *  The results will look like ...
 *
 *  The number is 0
 *  The number is 1
 *  The number is 2
 */
 
 
/*
 *  A for loop loops through a block of code a number of times.. 
 *
 *  for (statement 1; statement 2; statement 3) {
 *  // code block to be executed
 *  }
 *  Statement 1 is executed (one time) before the execution of the code block.
 *  usually statement is the starting point for the loop to start iterating at.
 *  Statement 2 defines the condition for executing the code block.
 *  Usually statement two is what condition you would like the loop to stop at
 *  Statement 3 is executed (every time) after the code block has been executed.
 */
 var i;
 for (i = 0; i < 3; i++) {
  text += "The number is " + i + "<br>";
}


/*  
 *  The results will look like ...
 *
 *  The number is 0
 *  The number is 1
 *  The number is 2
 */

// Statement 1 - Start at 0; 
// Statement 2 - Stop when i is 3
// Statement 3 - Iterate i +1 each time to reach the condition of 3, otherwise infinite loop will run

// -- The JavaScript FOR/IN statement loops through the properties of an object

var person = {
    fname:"John",
    lname:"Doe",
    age:25
}; 

var x;
for (x in person) {
  console.log(x); // => 'fname, lname, age'
  console.log(person[x]); // => 'John, Doe, 25'
}

// Want to print values from end to beginning? You can loop BACKWARDS also! 
var vacationSpots = ['Paris', 'New York', 'Barcelona'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
	console.log('I would love to visit ' + vacationSpots[i]);
}


// Statement 1 - Start at end of the array; 
// Statement 2 - Run loop while i is >= 0;
// Statement 3 - Iterate i -1 each time to reach the condition of 0, otherwise infinite loop will run