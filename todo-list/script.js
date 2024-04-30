const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

function createTaskItem(task) {
    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        <span class="text-muted">Saved: ${new Date().toLocaleDateString()}</span>
        <button class="btn btn-sm btn-danger float-end delete-btn">Delete</button>
    `;

    return li;
}

function removeTask(taskTitle) {
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem(taskTitle);
    }

    const taskItem = document.querySelector(`[data-title="${taskTitle}"]`);
    taskItem.remove();
}

function saveTask(task) {
    if (typeof localStorage !== "undefined") {
        let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    const taskItem = createTaskItem(task);
    taskItem.dataset.title = task.title;
    taskList.appendChild(taskItem);
}

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const taskTitle = event.target.parentNode.dataset.title;
        removeTask(taskTitle);
    }
});

function checkLocalStorage() {
    try {
        const testKey = "__testKey__";
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

function loadTasks() {
    if (typeof localStorage !== "undefined") {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.forEach((task) => {
            const taskItem = createTaskItem(task);
            taskItem.dataset.title = task.title;
            taskList.appendChild(taskItem);
        });
    }
}

if (checkLocalStorage()) {
    loadTasks();
} else {
    console.error("LocalStorage is not supported. Task data won't be saved.");
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document
        .getElementById("task-description")
        .value.trim();

    if (title && description) {
        const newTask = { title, description };
        saveTask(newTask);
        taskForm.reset();
    } else {
        alert("Please enter both title and description!");
    }
});
