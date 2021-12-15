# [Week 3: DOM Manipulation](https://learn.foundersandcoders.com/course/application/dom/)
## Codename validator

This project built my knowledge of DOM Manipulation and provided experience of managing input from a user, by creating a _Codename Validator_.

### Requirements

**_Set-up:_**
* Add an input box, a label, and a button to the HTML. Your input will be a string.

**_Functions:_** 
* Write a function that checks the length of the string. The function should output true if the string is more than 5 characters long. Otherwise, return false.
* Write a function that checks the string contains at least one lowercase letter; and at least one uppercase letter. If both are present, the function should return true - and if either are missing, it should return false.
* Write a function which checks whether the string has at least two numbers in it. If it does, then return true and otherwise return false.

**_DOM Manipulation:_** 
* Use DOM Manipulation to tie everything together.
* You’ll need to check the value of the input when the user clicks the button. Verify the input gives true when given as an argument to each of the functions.

**_User experience:_**
* If all functions return true give visual feedback to the user that the codename is valid. If any function returns false then give the user feedback that the codename is not valid. How you implement this is up to you.

**_Examples:_**
* Gregor23 is a valid username, and so is a88aFan.
* An invalid input would be d0g as it’s too short and has no uppercase letters or numbers; or 902101 since it has no letters. HELLOworld is not since it doesn’t contain numbers.

<br>

**Initial version:** https://web-platform-pdmpzq.stackblitz.io

**Final version** (link to be added shortly):

![codename-validator-cover](https://user-images.githubusercontent.com/63753021/146103793-aab38041-dd18-4d23-bccf-cc67c1bba807.jpg)

<br>

![codename-validator-notvalid](https://user-images.githubusercontent.com/63753021/146103812-4ace463c-5795-4fb6-9b1f-2ac9c5147beb.jpg)

<br>

![codename-validator-valid](https://user-images.githubusercontent.com/63753021/146103830-bdb0ead2-a856-4993-a434-89f3818df309.jpg)
