// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCodes = arrayForUpperLower(65, 90);
var lowercaseCodes = arrayForUpperLower(97, 122);
var numCodes = arrayForUpperLower(48, 57)
var symbolCodes = arrayForUpperLower(33, 47).concat(arrayForUpperLower(58, 64)).concat(arrayForUpperLower(91, 96)
).concat(arrayForUpperLower(123, 126));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let charCodes = lowercaseCodes;
if(window.confirm("do you want uppercase letters?")) {
  charCodes = charCodes.concat (uppercaseCodes);
}
if(window.confirm("do you want numbers?")) {
  charCodes = charCodes.concat (numCodes);
}
var symbolPrompt = window.confirm("do you want symbols?");

  

}

function arrayForUpperLower(low, high) {
  const array= []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}