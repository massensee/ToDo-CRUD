const btn = document.querySelector("button");
const form = document.getElementById("task-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const textInput = document.getElementById("task-input").value;

  console.log(textInput);
});
