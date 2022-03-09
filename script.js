// add toggle feature for password from password dots to text and back on click

//adding variables
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const toggleButton = document.querySelector("#toggleButton");

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
