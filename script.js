
// // Defined charset for password generation.
// var undercase = ["abcdefghijklmnopqrstuvwxyz"];
// var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var characters = ["!@#$%^&*()"];
// // var numbers = [0123456789].split("");
// var numbers = ["0123456789"];
// // Defined password min/max length.
// var numLength = {
//   from: 8,
//   to: 128
// };


// // console.log(undercase);
// // console.log(uppercase);
// // console.log(characters);
// // console.log(numbers);
// // console.log(passwordLength);
// // console.log(password);




// // What sorts of actions/tasks do my code need to complete?

// // Generate Password
// function generatePassword() {
  
//   // Prompt the user for their password length and store it in a variable
//   var numLength = prompt("How many characters do you want your password to contain? Please choose a number between 8 and 128.");
//   // Validate the password length and make sure it's a number between or equal to 8 and 128
//   function between(numLength, min, max) {
//     return numLength >= min && numLength <= max;
//   }
//   // TODO Prompt confirmation? Here?
//   if (between(numLength, 8, 128)) {
//     // something
//   }
//   // Prompt the user for if they want to use special characters
// }




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat



//??????????????????????????????????????????????????????????????????????????????????


// What sort of data does my application need to work?

// numbers
// var numbers = ["1", "2", "3", ...];

// special characters
// var special = ["!","@","#", ...];

// lower case letters
// var lowercase = ["a","b","c", ...];

// uppercase case letters
// var uppercase = ["A","B","C", ...];

var undercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var characters = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Generate Password
function generatePassword() {

  // Prompt the user for their password length and store it in a variable
  var numLength = prompt("How many characters do you want your password to contain? Please choose a number between 8 and 128.");
  if (numLength.value <= 8 && numLength.value >= 128) {
    alert("Please enter a range between 8 and 128 characters");
  }
  // Validate the user's provided passwordLength to be a number within the range of 8 to 128
  // IF password length is NOT a number OR is less than 8 OR is greater than 128;

    // THEN Alert the user they provided an invalid password length
    // AND Return and exit early

  // Prompt the user for if they want special characters and store it in a variable
  
  // Prompt the user for if they want numbers characters and store it in a variable

  // Prompt the user for if they want lowercase characters and store it in a variable

  // Prompt the user for if they want uppercase characters and store it in a variable

  // Validate the user's charater choices
  // IF the user answers no to all character choices

    // THEN Alert the user they they need to choose a character option
    // AND Return and exit early

  // Celebrate! We have all the data we need :D

  // DECLARE a new empty array to store the `characters` we want to use.

  // IF the users wants special characters

      // combine special characters with `characters`
      // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  // REPEAT check and combine for numbers, lowercase and uppercase

  // DECLARE a new empty string to store the password we want to build.

  // FOR the length of the password the user wants

    // Randomly select a character from the list of characters

    // Add the selected character to the password being built;

  // RETURN the built password;

} 

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
