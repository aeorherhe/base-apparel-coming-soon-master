// select html elements

const submitBtn = document.querySelector(".submit-icon");
const article = document.querySelector("article");
const inputField = document.getElementById("inputfield");

console.log(submitBtn);
console.log(article.classList);

submitBtn.addEventListener("click", function () {
  if (
    !inputField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    article.classList.add("show-error-msg");
  } else {
    article.classList.remove("show-error-msg");
  }
});
