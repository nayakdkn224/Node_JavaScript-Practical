//Write a JavaScript program to check if a key exists in an object. 

let User = {
    id: 1,
    AGE: 28
}

// Check for the keys
let result = User.hasOwnProperty('id');
console.log(result);