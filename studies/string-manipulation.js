/*
 * STRING MANIPULATION:
 *
 * 0. With operators
 *  
 * 1. With string methods
 */
 
 // -- STRING Manipulation with operators..
 // The + operator can be used to add (concatenate) strings.
 
var txt1 = "John";
var txt2 = "Doe";
console.log(tx1 + " " + txt2); // => 'John Doe'

// The += assignment operator can also be used to add (concatenate) strings:
var txt1 = "What a very ";
txt1 += "nice day";
console.log(txt1); // => 'What a very nice day'

/*
 *  The SLICE() Method extracts a part of a string and returns the extracted part in a new string.
 *  The method takes 2 parameters: the start position, and the end position (end not included).
 *  If a parameter is negative, the position is counted from the end of the string.
 */

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // This example slices out part of a string from position 7 to position 12 (13-1)
console.log(res); // => '[7, 8, 9, 10, 11, 12]'
var res = str.slice(-12, -6); // => 'Banana'

// If you omit the second parameter, the method will slice out the rest of the string:
var res = str.slice(7);
console.log(res); // => 'Banana, Kiwi'

// -- The .LENGTH property returns the length of a string..
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var txtLength = txt.length;
console.log(txtLength); // => '26'

// -- The INDEXOF() method returns the index of (the position of) the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos); // => '7'

// -- The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos); // => '21'

// Both methods accept a second parameter as the starting position for the search
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
console.log(pos); // => '21'

// -- The search() method searches a string for a specified value and returns the position of the match
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos); // => '7'

// -- The substring() Method is similar to slice(), except it cant accept negative values.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res); // => 'Banana'

// If the first parameter is negative, the position counts from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
console.log(res); // => 'Kiwi'

// -- The REPLACE() method replaces a specified value with another value in a string..
str = "Hello World";
var n = str.replace("World", "Everyone");
console.log(n); // => 'Hello Everyone'

// -- A string is converted to upper case with toUpperCase()..
var text1 = "Hello World!";       
var text2 = text1.toUpperCase();  
console.log(text2); // => 'HELLO WORLD'

// -- A string is converted to lower case with toLowerCase()..
var text1 = "Hello World!";       
var text2 = text1.toLowerCase();  
console.log(text2); // => 'hello world'

// -- The concat() Method oins two or more strings..
var text1 = "Hello ";
var text2 = "World";
var text3 = text1.concat(text2);
console.log(text3); // => 'Hello world'

// -- The trim() method removes whitespace from both sides of a string..
var str = "     Hello World!        ";
console.log(str.trim()); // => 'Hello World'

// -- The charAt() method returns the character at a specified index (position) in a string..
var str = "HELLO WORLD";
str.charAt(0); // => 'H'
// NOTE the index starts at 0 not 1!

// -- A string can be converted to an array with the split() method...
var txt = "a,b,c,d,e";
console.log(txt.split(",")); // Split on commas => '[ 'a b c', ' d e' ]' 
console.log(txt.split(" ")); // Split on spaces => '[ 'a', 'b', 'c,', 'd', 'e' ]'

// If the separator is "", the returned array will be an array of single characters..
var txt = "Hello";       // String
console.log(txt.split("")); // => 'H e l l o' 