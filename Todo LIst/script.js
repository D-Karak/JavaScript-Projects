let taskField = document.getElementById("task-field");
let addBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");
addBtn.onclick = createTask;
function createTask() {
    let task = taskField.value;
    if (task === "") {
        alert("You did not enter any task");
        return;
    }
    let taskListItem = document.createElement("li");
    taskListItem.classList.add("task-item");
    taskListItem.textContent = task;
    taskList.appendChild(taskListItem);
    let taskDelete = document.createElement("button");
    taskDelete.classList.add("task-delete");
    taskDelete.textContent = "Delete";
    taskListItem.appendChild(taskDelete);
    taskDelete.onclick = function () {
        let parentListItem = this.parentNode;
        parentListItem.parentNode.removeChild(parentListItem);
    }
    taskField.value = "";
}
