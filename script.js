// add toggle feature for password from password dots to text and back on click

//adding variables
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const toggleButton = document.querySelector("#toggleButton");

function togglePassword() {
  if (firstPassword.type === "password") {
    firstPassword.setAttribute("type", "text");
    secondPassword.setAttribute("type", "text");
  } else {
    firstPassword.setAttribute("type", "password");
    secondPassword.setAttribute("type", "password");
  }
}

toggleButton.addEventListener("click", () => {
  togglePassword();
});
