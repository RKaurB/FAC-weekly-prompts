/* Function that checks the length of the string.
Outputs true if the string is more than 5 characters long, otherwise returns false. */

const isLonger = () => codeName.value.length > 5 ? true : false;
// console.log(isLonger("Testing"));
// console.log(isLonger("Test"));


/* Function that checks the string contains at least one lowercase letter, and at least one uppercase letter. 
It returns true if both are present, and false if either are missing. */

const checkCase = () => codeName.value.toUpperCase() != codeName.value && codeName.value.toLowerCase() != codeName.value;
// console.log(checkCase("Shopping"));
// console.log(checkCase("SHoPpINg"));
// console.log(checkCase("sHOPPING"));
// console.log(checkCase("shopping"));
// console.log(checkCase("SHOPPING"));


/* Function that checks whether the string has at least two numbers in it.
If so, it returns true. Otherwise, it returns false. */

// function checkNumbers() {
//   let numbers = 0;
//   for (let i = 0; i < codeName.value.length; i++) {
//     if (!isNaN(codeName.value.charAt(i))) {
//       numbers += codeName.value[i];
//     } 
//   } 
//   return numbers >= 2;
// }

function checkNumbers() {
  let numbers = 0;
  for (let i = 0; i < codeName.value.length; i++) {
    if (!isNaN(codeName.value.charAt(i))) {
      numbers++;
    } 
  } 
  return numbers >= 2;
}

// console.log(checkNumbers("abc12"));
// console.log(checkNumbers("abc1"));
// console.log(checkNumbers("five5two2ten10"))
// console.log(checkNumbers("abc"));


/* Dom Manipulation
Use DOM Manipulation to tie everything together.
Check the value of the input when the user clicks the button. Verify the input gives true when given as an argument to each of the functions. */

/* User experience
If all functions return true, give visual feedback to the user that the codename is valid.
If any function returns false, then give the user feedback that the codename is not valid. */

const codeName = document.querySelector("#codeName");
const submit = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const validateLength = isLonger();
  const validateCase =  checkCase();
  const validateNumbers = checkNumbers();
  if (validateLength && validateCase && validateNumbers) {
    feedback.style.color = "green";
    feedback.innerText = "Valid";
  } else {
    feedback.style.color = "red";
    feedback.innerText = "Not Valid";
  }
});
