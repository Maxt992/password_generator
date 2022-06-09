
// Defined charset for password generation.
var undercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var characters = ["!@#$%^&*()"];
// var numbers = [0123456789].split("");
var numbers = ["0123456789"];
// Defined password min/max length.
var passwordLength = {
  from: 8,
  to: 128
};


// console.log(undercase);
// console.log(uppercase);
// console.log(characters);
// console.log(numbers);
// console.log(passwordLength);
// console.log(password);




// What sorts of actions/tasks do my code need to complete?

// Generate Password
function generatePassword() {
  
  // Prompt the user for their password length and store it in a variable
  var numLength = prompt("How many characters do you want your password to contain? Please choose a number between 8 and 128.");
  // Validate the password length and make sure it's a number between or equeal to 8 and 128
  function between(numLength, min, max) {
    return numLength >= min && x <= max;
  }
  // TODO Prompt confirmation? Here?
  if (between(numLength, 8, 128)) {
    // something
  }
  // Prompt the user for if they want to use special characters
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat