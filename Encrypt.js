
var Select = document.getElementById("select");
var text = document.getElementById("Text");
var answer = document.getElementById("Answer");
var Button = document.getElementById("button");

text.addEventListener("input", () => {
  Encrypt();
});
Select.addEventListener("change", () => {
  Encrypt();
});
Button.addEventListener("click", () => {
  Encrypt();
});
function Encrypt() {
  if (Select.value == "btoa") {
    answer.value = btoa(text.value);
  } else if (Select.value == "atob") {
    answer.value = atob(text.value);
  }
}
