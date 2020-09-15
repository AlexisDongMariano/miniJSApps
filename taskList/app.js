// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const btnClear = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Event Listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

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

    e.preventDefault();
}