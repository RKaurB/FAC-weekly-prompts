/* HELLO USER
A function that greets the user. 
The function receives one argument, a string (person's name). 
It returns the output "Hello " and then the name, in the console. */

// function greeter(name) {
//   return "Hello, " + name + "!";
// }

// const greeter = (name) => `Hello, ${name}!`;

const greeter = (name = "there") => `Hello ${name}.\n`;

// test with desired name
console.log(greeter("Yvonne"));
console.log(greeter());


/* WHAT TYPE?
A function that returns the type of the argument passed in. */

// function checkType(arg) {
//   return typeof arg;
// }

// const checkType = (arg) => typeof(arg);

const checkType = (arg) => `Checking type:\n This is a ${typeof(arg)}\n`;

// test with arguments
console.log(checkType(12));
console.log(checkType("this is a string"));
console.log(checkType([12, "item"]));
console.log(checkType([1, 2, 3]));
console.log(checkType(false));


/* CHECK LENGTH
A function that returns the length of the string passed in. */

// function checkLength(str) {
//   return str.length;
// }

const checkLength = (str) => `Length:\n ${str.length}\n`;

console.log(checkLength("Around the World"));
console.log(checkLength(["green", 14]));
