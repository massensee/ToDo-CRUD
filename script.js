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

  const task = createTask(inputValue);
  list.appendChild(task);
});

function createTask(inputValue) {
  const btnModifier = document.createElement("button");
  btnModifier.textContent = `✏️`;

  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = `❌`;

  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const task = document.createElement("li");
  const taskText = document.createElement("span");
  task.textContent = inputValue;

  task.appendChild(taskText);
  task.appendChild(actions);
  actions.appendChild(btnModifier);
  actions.appendChild(btnSupprimer);

  return task;
}
