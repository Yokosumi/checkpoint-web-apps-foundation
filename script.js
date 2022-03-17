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
const lowerCaseCheck = document.querySelector("#lowerCaseCheck");
const upperCaseCheck = document.querySelector("#upperCaseCheck");
const numberCheck = document.querySelector("#numberCheck");
const lengthCheck = document.querySelector("#lengthCheck");

// check up functions
function checkEquality() {
  if (firstPassword.value === secondPassword.value) {
    equalityCheck.checked = true;
  } else {
    equalityCheck.checked = false;
  }
}

function checkLowerCase() {
  if (firstPassword.value.toUpperCase() !== firstPassword.value) {
    lowerCaseCheck.checked = true;
  } else {
    lowerCaseCheck.checked = false;
  }
}
function checkUpperCase() {
  if (firstPassword.value.toLowerCase() !== firstPassword.value) {
    upperCaseCheck.checked = true;
  } else {
    upperCaseCheck.checked = false;
  }
}
function checkNumber() {
  if (/\d+/.test(firstPassword.value)) {
    numberCheck.checked = true;
  } else {
    numberCheck.checked = false;
  }
}
function checkLength() {
  if (firstPassword.value.length >= 10) {
    lengthCheck.checked = true;
  } else {
    lengthCheck.checked = false;
  }
}

// input eventlistener
firstPassword.addEventListener("input", () => {
  checkEquality();
  checkLowerCase();
  checkUpperCase();
  checkNumber();
  checkLength();
});
secondPassword.addEventListener("input", () => {
  checkEquality();
});

// toggle password function
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
