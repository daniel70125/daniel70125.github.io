/*
 *  CONTROL FLOW-
 *
 * 0.The control flow is the order in which the computer executes statements in a script.
 *
 * 1.Code is run in order from the first line in the file to the last line.
 */
 
 // -- The block statement doesn’t change the control flow but is used to group statements.
 
 function create() {
     
// Code block is here
// Code in here stops in here, wont go past curly braces...

}

// -- If statements specify a block of JavaScript code to be executed if a condition is true.
var hour = 17;
if (hour < 18) {
  greeting = "Good day";
} // => 'Good Day'

// -- Use the else statement to specify a block of code to be executed if the condition is false.
var hour = 20;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} // => 'Good evening'

// -- Use the else if statement to specify a new condition if the first condition is false.
var time = 11;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} // => 'Good Day'


// -- BREAK ! Break as the name implies, breaks. Breaks what? Breaks the statement 
//    or in normally the cases break the loop.

function ex() {
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}}
ex(); // => '0,1,2'

/*
 *  In this loop, if we take the break out, the loop it iterates thru all value
 *  from 0 to 4. But because we have a break on 3, it will only iterate from 0 to 2.
 *  Basically, this condition says if i is equal to 3 then break and stop the loop there.
 */
 
 // -- SWITCH! A switch statement is used when you have to use many if statements in the same function for example. 
 
 var music = [
"rap",
"R&B",
"Rock",
];
function ex2() {
if (music[0] === "placebo"){
  console.log(true);
} else {
  console.log(false);
 }
}
ex2(); // => 'Rap'
// So here we are checking if the index 0 of the array is equal to “Rap”, print out true.
 