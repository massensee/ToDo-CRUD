const form = document.getElementById("task-form");
const message = document.getElementById("message");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tasks = [];

function saveTasks(tasksArray) {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function loadTasks() {
  const stockTask = localStorage.getItem("tasks");
  const taskFromStorage = JSON.parse(stockTask);
  tasks = taskFromStorage;
  console.log(tasks);
}

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

  tasks.push(inputValue);
  saveTasks(tasks);
});

function createTask(inputValue) {
  const btnModifier = createButton("✏️", null, null, "Modifier la tâche");

  const btnSupprimer = createButton(
    "❌",
    "btn-delete",
    deleteTask,
    "Supprimer la tâche"
  );

  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const task = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = inputValue;

  task.appendChild(taskText);
  task.appendChild(actions);
  actions.appendChild(btnModifier);
  actions.appendChild(btnSupprimer);

  return task;
}

function createButton(text, className, onClick, label) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = text;
  if (label) btn.setAttribute("aria-label", label);
  if (className) btn.classList.add(className);
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}

function deleteTask(e) {
  const task = e.target.closest("li");
  task.remove();
}
