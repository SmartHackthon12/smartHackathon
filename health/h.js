document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Add a new task to the list
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="delete-task">Delete</span>
            `;

            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';

            // Add an event listener to delete the task
            listItem.querySelector('.delete-task').addEventListener('click', function () {
                listItem.remove();
            });
        }
    });
});
