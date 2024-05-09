var serialNumber = 1; // Initialize serial number

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        // Create a new task item
        var li = document.createElement("li");

        // Create a span for the task text
        var textSpan = document.createElement("span");
        textSpan.innerText = taskInput.value;
        li.appendChild(textSpan);

        // Create icons for task status
        var doneIcon = document.createElement("span");
        doneIcon.innerHTML = "✓";
        doneIcon.classList.add("status-icon", "done");
        doneIcon.style.display = "none"; // Initially hidden
        li.appendChild(doneIcon);

        var partiallyDoneIcon = document.createElement("span");
        partiallyDoneIcon.innerHTML = "?";
        partiallyDoneIcon.classList.add("status-icon", "partially-done");
        partiallyDoneIcon.style.display = "none"; // Initially hidden
        li.appendChild(partiallyDoneIcon);

        var notDoneIcon = document.createElement("span");
        notDoneIcon.innerHTML = "❌";
        notDoneIcon.classList.add("status-icon", "not-done");
        notDoneIcon.style.display = "none"; // Initially hidden
        li.appendChild(notDoneIcon);

        // Create a checkbox for the task
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "taskCheckbox";
        checkbox.value = serialNumber - 1;
        checkbox.classList.add("task-checkbox");
        li.appendChild(checkbox);

        // Add event listener to toggle task status on click
        li.addEventListener("click", function() {
            toggleTaskStatus(li);
        });

        // Append the new task item to the task list
        taskList.appendChild(li);

        // Increment the serial number for the next task
        serialNumber++;

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function toggleTaskStatus(taskItem) {
    var doneIcon = taskItem.querySelector(".done");
    var partiallyDoneIcon = taskItem.querySelector(".partially-done");
    var notDoneIcon = taskItem.querySelector(".not-done");

    if (doneIcon.style.display === "none") {
        // Show "Done" icon and hide others
        doneIcon.style.display = "inline";
        partiallyDoneIcon.style.display = "none";
        notDoneIcon.style.display = "none";
    } else if (partiallyDoneIcon.style.display === "none") {
        // Show "Partially Done" icon and hide others
        doneIcon.style.display = "none";
        partiallyDoneIcon.style.display = "inline";
        notDoneIcon.style.display = "none";
    } else if (notDoneIcon.style.display === "none") {
        // Show "Not Done" icon and hide others
        doneIcon.style.display = "none";
        partiallyDoneIcon.style.display = "none";
        notDoneIcon.style.display = "inline";
    } else {
        // Hide all icons
        doneIcon.style.display = "none";
        partiallyDoneIcon.style.display = "none";
        notDoneIcon.style.display = "none";
    }
}

function deleteTasks() {
    var checkboxes = document.getElementsByName("taskCheckbox");
    var taskList = document.getElementById("taskList");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            taskList.removeChild(checkboxes[i].parentNode);
        }
    }
}
