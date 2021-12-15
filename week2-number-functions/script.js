/* SUM OF TWO NUMBERS
A function that accepts two numbers as arguments, and returns their sum. */

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// const addTwoNumbers = (num1, num2) => `Sum:\n ${num1 + num2}\n`;

const addTwoNumbers = (num1, num2) => num1 + num2;

// Test
console.log(addTwoNumbers(4, 6));

let result = addTwoNumbers(5, 15);
console.log(result);

let newNum = 12;
console.log(addTwoNumbers(result, newNum));


/* ADD AND MULTIPLY
A function that accepts four arguments, each a number.
It adds the first two numbers together, adds the third and fourth numbers, and returns the result of multiplying both sums together. */

// function addAndMultiply(num1, num2, num3, num4) {
//   sum1 = num1 + num2;
//   sum2 = num3 + num4;
//   return sum1 * sum2;
// }

const addAndMultiply = (num1, num2, num3, num4) => ((num1 + num2) * (num3 + num4));

// Test
console.log(addAndMultiply(2,3,4,5));
console.log(addAndMultiply(1,1,1,1));


/* RETURN LARGER
A function that accepts two numbers, and returns the larger number. */

// function checkLarger (num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   }
//   return num2;
// }

// function checkLarger(num1, num2) {
//   return Math.max(num1, num2);
// }

const checkLarger = (num1, num2) => Math.max(num1, num2);

// Test
console.log(checkLarger(1, 2));
console.log(checkLarger(44, 33));


/* SUM OF ELEMENTS
A function that accepts an array as an argument, each item in the array being a number.  It adds all the numbers in the array, and returns the result. */

// function addArrNums(arr) {
//   let summed = 0;
//   for (let i = 0; i < arr.length; i++) {
//     summed += arr[i];
//   }
//   return summed;
// }

const addArrNums = (arr) => arr.reduce((previous, current) => previous + current, 0);

// Test
console.log(addArrNums([]));
console.log(addArrNums([1]));
console.log(addArrNums([4, 7, 12, 11]));
console.log(addArrNums([4, 5, 6, 7, 8, 9]));


/* SQUARING A NUMBER
A function that accepts one input (a number), and returns the square of that number. */

// function numberSquared(num) {
//   return num * num;
// }

const numberSquared = (num) => num * num;

console.log(numberSquared(1));
console.log(numberSquared(2));
console.log(numberSquared(3));


/* ODD OR EVEN 
A function that accepts a number as an argument, determines whether the number is even or odd, and returns 'Even' or 'Odd', accordingly. */

// function oddOrEven(num) {
//   if (num % 2 === 1) {
//     return "Odd";
//   }
//   return "Even";
// }

const oddOrEven = (num) => num % 2 === 1 ? "Odd" : "Even";

console.log(oddOrEven(2));
console.log(oddOrEven(38));
console.log(oddOrEven(111));


/* SUM OF POSITIVE
A function that accepts an array as an argument, adds up all the positive numbers from the array, and returns the sum (or zero, if there are no positive numbers to sum). */

// function sumOfPositive(arr) {
//   let summed = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       summed += arr[i];
//     }
//   }
//   return summed;
// }

// Sum all numbers in array:
// const addArrNums = (arr) => arr.reduce((previous, current) => previous + current, 0);

const sumOfPositive = (arr) => {
  return arr.filter(item => item > 0).reduce((previous, current) => previous + current, 0);
}

console.log(sumOfPositive([1, -1, 0, 4]));
console.log(sumOfPositive([-4, -1, -3]));
console.log(sumOfPositive([4, 1, 3, 10, 54]));
console.log(sumOfPositive([]));
