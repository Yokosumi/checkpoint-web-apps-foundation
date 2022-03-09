// add toggle feature for password from password dots to text and back on click ✓
// add equality check for both passwords

//adding variables
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const toggleButton = document.querySelector("#toggleButton");
const wrapper = document.querySelector("#wrapper");

// input text value variables
const testButton = document.querySelector("#test");

// adds Equality Check

const equalityCheckBox = document.createElement("input");
equalityCheckBox.type = "checkbox";
const newPara = document.createElement("p");
const newTextNode = document.createTextNode("Passwords are Equal");
const appendTextNodeToNewPara = newPara.appendChild(newTextNode);
wrapper.appendChild(equalityCheckBox);
wrapper.appendChild(appendTextNodeToNewPara);

// input eventlistener
firstPassword.addEventListener("input", () => {});
secondPassword.addEventListener("input", () => {});

testButton.addEventListener("click", () => {});

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
