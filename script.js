// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var symbols = ["!@#$%^&*_-+="];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var passwordText = document.querySelector("#password");
  var passwordLength = window.prompt('Choose between 8 - 128 characters', '');
    passwordLength = parseInt(passwordLength);
      if (passwordLength > 128 || passwordLength < 8) {
        window.alert('The password must be at least 8 characters long, up to 128 characters. Please re-enter to fit this criteria');
      }
      // if true, it needs to go back to the previous screen to allow the user to re-enter a valid number
  
  var lowercase = confirm('Do you want lowercase letters?')
      if (lowercase === true) {
        console.log('Include lowercase');
      } else {
        console.log('Do not include lowercase');
      }
  var uppercase = confirm('Do you want uppercase letters?')
      if (uppercase === true) {
        console.log('Include uppercase');
      } else {
        console.log('Do not include uppercase');
      }
  var numbers = confirm('Do you want numbers?')
      if (numbers === true) {
        console.log('Include numbers');
      } else {
        console.log('Do not include numbers');
      }
  var symbols = confirm('Do you want symbols?')
        if (symbols === true) {
          console.log('Include symbols');
        } else {
          console.log('Do not include symbols');
        }

  // return randomPassword;

  // passwordText.value = password;



// These are notes and codes that I think I can utilize
//  var password = "generatePassword";

//      if (passwordLength <= 128 || passwordLength >= 8) {
  // valid = true;
  //break;
//}



// my notes:
// first: click button
// second: prompts appear anc can be checked
// third: allow user to enter desired length
// fourth: choose prompts to be included (lower, upper, num, symb)
// fifth: validate and ensure at least one type is selected
// sixth: generate password
// seventh: display password in window.alert
// special characters: https://owasp.org/www-community/password-special-characters