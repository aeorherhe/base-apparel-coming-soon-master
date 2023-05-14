// select html elements

const submitBtn = document.querySelector(".submit-icon");
const article = document.querySelector("article");
const inputField = document.getElementById("input-field");
const label = document.querySelector(".label");
const mailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function validateEmail() {
  if (!inputField.value.match(mailRegex)) {
    article.classList.add("show-error-msg");
  } else {
    article.classList.remove("show-error-msg");
  }
}

inputField.addEventListener("input", validateEmail);

submitBtn.addEventListener("click", function () {
  if (inputField.value.match(mailRegex)) {
    label.classList.add("show-msg");
  }
});
