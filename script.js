// add toggle feature for password from password dots to text and back on click ✓
// add equality check for both passwords

//adding variables
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const toggleButton = document.querySelector("#toggleButton");
// input text value variables
const firstPasswordValue = firstPassword.value;
const secondPasswordValue = secondPassword.value;

//comparison function of input values
const testButton = document.querySelector("#test");
testButton.addEventListener("click", () => {
  compareInput();
});
function compareInput() {
  let result = firstPasswordValue.localCompare(secondPasswordValue);
  console.log(result);
}

// toggle password feature
function togglePassword() {
  if (firstPassword.type === "password") {
    firstPassword.setAttribute("type", "text");
    secondPassword.setAttribute("type", "text");
    toggleButton.innerHTML = "Hide Passwords";
  } else {
    firstPassword.setAttribute("type", "password");
    secondPassword.setAttribute("type", "password");
    toggleButton.innerHTML = "Show Passwords";
  }
}

toggleButton.addEventListener("click", () => {
  togglePassword();
});
