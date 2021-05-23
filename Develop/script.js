// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 8;
// Write password to the #password input
function writePassword() {
  var password = generatePassword(length, 8, 128);
  var passwordText = document.querySelector("#password");
  var long = prompt("How long is your password?")
  length = long;
  if (length > 8, length < 128) {
    length = long;
  console.log(length);
  passwordText.value = password;

}
else {
  window.alert("put between 8 and 128 characters")
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;

 
}
