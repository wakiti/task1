const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
  }
}
addTaskButton.addEventListener("click", addTask);

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Add edit icon
    const editIcon = document.createElement("span");
    editIcon.classList.add("edit-icon");
    editIcon.innerHTML = "✎";
    editIcon.addEventListener("click", () => editTask(index));
    li.appendChild(editIcon);

    // Add delete icon
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = "✖";
    deleteIcon.addEventListener("click", () => deleteTask(index));
    li.appendChild(deleteIcon);

    taskList.appendChild(li);
  });
}

function editTask(index) {
  const editedTaskText = prompt("Edit task:", tasks[index]);
  if (editedTaskText !== null) {
    tasks[index] = editedTaskText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  const confirmation = confirm("Are you sure you want to delete this task?");
  if (confirmation) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

renderTasks();
