// add toggle feature for password from password dots to text and back on click ✓
// add equality check for both passwords

//input bars
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
// button
const toggleButton = document.querySelector("#toggleButton");
// wrapper
const wrapper = document.querySelector("#wrapper");
// checkboxes
const equalityCheck = document.querySelector("#equalityCheck");
const upperCaseCheck = document.querySelector("#upperCaseCheck");
const lowerCaseCheck = document.querySelector("#lowerCaseCheck");
const numberCheck = document.querySelector("#numberCheck");
const lengthCheck = document.querySelector("#lengthCheck");

function checkEquality() {
  if (firstPassword.value === secondPassword.value) {
    equalityCheck.checked = true;
  } else {
    equalityCheck.checked = false;
  }
}

// input eventlistener
firstPassword.addEventListener("input", () => {
  checkEquality();
});
secondPassword.addEventListener("input", () => {
  checkEquality();
});

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
