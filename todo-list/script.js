const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

function createTaskItem(task) {
  const li = document.createElement("li");
  li.className = "list-group-item";

  const title = document.createElement("h5");
  title.innerText = task.title;

  const description = document.createElement("p");
  description.innerText = task.description;

  const savedDate = document.createElement("span");
  savedDate.classList.add("text-muted");
  savedDate.innerText = `Saved: ${new Date().toLocaleDateString()}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "float-end");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => removeTask(task));

  li.appendChild(title);
  li.appendChild(description);
  li.appendChild(savedDate);
  li.appendChild(deleteBtn);

  return li;
}

function removeTask(task) {
  const taskItem = document.querySelector(`[data-title="${task.title}"]`);
  taskList.removeChild(taskItem);
}
