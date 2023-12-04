/* 
    Code Filename: ComplexApp.js
    Content: A complex JavaScript application demonstrating various concepts and features
*/

// Importing required libraries
const moment = require('moment');
const axios = require('axios');

// Class representing a User
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.isLoggedIn = false;
    }
    
    login() {
        this.isLoggedIn = true;
        console.log(`${this.name} has logged in.`);
    }
    
    logout() {
        this.isLoggedIn = false;
        console.log(`${this.name} has logged out.`);
    }
}

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generating a random age between 1 and 100
const randomAge = getRandomNumber(1, 100);

// Creating a user object
const user = new User('John Doe', 'john.doe@example.com');

// Logging in the user
user.login();

// Using moment.js library to format the current date and time
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

// Making an HTTP GET request using axios
axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

// Complex logic involving loops and conditionals
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is an even number.`);
    } else {
        console.log(`${i} is an odd number.`);
    }
}

// A recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Calculating the factorial of a random number
const factorialNumber = factorial(randomAge);
console.log(`Factorial of ${randomAge} is ${factorialNumber}`);

// Provided code length: 200 lines.