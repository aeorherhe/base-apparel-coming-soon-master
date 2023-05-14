// select html elements

const submitBtn = document.querySelector(".submit-icon");
const article = document.querySelector("article");

console.log(submitBtn);
console.log(article.classList);

submitBtn.addEventListener("click", function () {
  article.classList.toggle("show-error-msg");
});
