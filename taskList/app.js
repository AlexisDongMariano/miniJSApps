// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const btnClear = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    btnClear.addEventListener('click', deleteAllTasks);
    filter.addEventListener('keyup', filterTasks);
}

// Event Listeners
loadEventListeners();

function addTask(e) {
    if (taskInput.value === '')
        alert('Add a task');
    else {

        // create li element
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));

        // create a element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append elements
        li.appendChild(link);
        taskList.appendChild(li);

        taskInput.value = '';
    }
    e.preventDefault();
}

function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item'))
        if (confirm('confirm delete'))
            e.target.parentElement.parentElement.remove();

}

function deleteAllTasks(e) {
    // taskList.innerHTML = '';
    if (confirm('Remove all tasks?')) {
        while (taskList.firstChild)
            taskList.removeChild(taskList.firstChild);
    }

}

function filterTasks(e) {
    filterValue = filter.value.toLowerCase();

    const taskList = document.querySelectorAll('.collection-item');

    taskList.forEach(function (task) {
        let item = task.firstChild.textContent;
        if (item !== filterValue)
            task.remove();
    });
}