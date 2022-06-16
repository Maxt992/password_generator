var undercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var characters = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var numLength = [];

// Generate Password
function generatePassword() {

  // Prompt the user for their password length and store it in a variable

  var numLength = prompt("How many characters do you want your password to contain? Please choose a number between 8 and 128.", "");
  
  // Validate the user's provided passwordLength to be a number within the range of 8 to 128
  // IF password length is NOT a number OR is less than 8 OR is greater than 128;

  if ( numLength > 128 || numLength < 8 ) {
  
    // THEN Alert the user they provided an invalid password length
    // AND Return and exit early

    alert("Invalid password length.");
    return;
  } 

  // Prompt the user for if they want special characters and store it in a variable

  var specialChar = confirm("Would you like your password to use special characters? (ex. !@#$,etc)");

  // Prompt the user for if they want numbers characters and store it in a variable

  var numChar = confirm("Would you like your password to contain numeric characters? (ex. 1234, etc.)");

  // Prompt the user for if they want lowercase characters and store it in a variable

  var lowChar = confirm("Would you like your password to contain lowercase characters? (ex. abcd, etc.)");

  // Prompt the user for if they want uppercase characters and store it in a variable

  var upChar = confirm("Wouuld you like your password to contain uppercase characters? (ex. ABCD, etc.)");

  

  // Validate the user's charater choices
  // IF the user answers no to all character choices

  if (specialChar === false + numChar === false + lowChar === false + upChar === false) {

    // THEN Alert the user they they need to choose a character option
    // AND Return and exit early

    alert("You must select at least one character option.")
    return;
  }
  // Celebrate! We have all the data we need :D

  // DECLARE a new empty array to store the `characters` we want to use.

  var passChar = [];

  // IF the users wants special characters

  if (specialChar === true) {
      // combine special characters with `characters`
      // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

      passChar = passChar.concat(characters);
  }
  // REPEAT check and combine for numbers, lowercase and uppercase

  if (numChar === true) {
    passChar = passChar.concat(numbers);
  }

  if (lowChar === true) {
    passChar = passchar.concat(undercase);
  }

  if (upChar === true) {
    passChar = passChar.concat(uppercase);
  }

  // DECLARE a new empty string to store the password we want to build.

  var userPassword = [];

  // FOR the length of the password the user wants

  // I'M STUCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
