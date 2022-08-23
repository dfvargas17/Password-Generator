// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (); {
  var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*",];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
  var userInput = "";
  var passwordLength = "";
  return "";
}

function getUserSubmition() {
  function input () {
    passwordLength = prompt ("Password must be bewtween 8 to 128 characters?");
    lowCase = confirm ("Do you want lower case characters in your password?");
    upperCase = confirm ("Do you want upper case characters in your password?");
    specialChars = confirm ("Do you want special characters in your password?");
    numbers = confirm ("Do you want numbers in your password?");
  }
  input ();
  while(lowCase == false && upperCase == false && specialChars == false && numbers) {
    var continue = confirm 
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
