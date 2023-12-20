//Write a JavaScript program to replace first occurrence of a
//character in a string. 

let string = 'Today 20th December has Node.js and JavaScript Pratical.' + 
    ' we can learn multiple languages Nodeja ans JavaScript .' + 
    'Node.js is a  good ru time Envirnoent to run javascript out of the browser'; 
  
// Calling replace() method 
let newstring = string.replace(/Node.js/, 'java'); 
  
// Printing replaced string 
console.log(newstring);