// script.js

document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const newTask = taskInput.value.trim();

    if (newTask) {
        const li = document.createElement('li');
        li.textContent = newTask;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Optional: Add functionality to remove tasks
document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
