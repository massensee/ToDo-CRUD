const form = document.getElementById("task-form");
const message = document.getElementById("message");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();

  if (!inputValue) {
    message.textContent = "Veuillez entrer une tâche !";
    message.classList.add("error");
    input.focus();
    return;
  }

  message.textContent = "";
  message.classList.remove("error");
});
