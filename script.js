function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement("li");
        taskItem.className = "taskItem";

        var taskText = document.createElement("span");
        taskText.innerText = taskInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}
