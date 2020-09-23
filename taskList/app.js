// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const btnClear = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListeners();

// Event Listeners
function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    btnClear.addEventListener('click', deleteAllTasks);
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function (task) {
        // create li element
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));
        //store in LocalStorage

        // create a element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append elements
        li.appendChild(link);
        taskList.appendChild(li);
    });

}

function addTask(e) {
    if (taskInput.value === '')
        alert('Add a task');
    else {

        // create li element
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));
        //store in LocalStorage

        // create a element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append elements
        li.appendChild(link);
        taskList.appendChild(li);

        // store in LocalStorage
        addInLS(taskInput.value);

        taskInput.value = '';
    }
    e.preventDefault();

}

function addInLS(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        console.log('Tasks are empty, creating new list');
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item'))
        if (confirm('confirm delete'))
            e.target.parentElement.parentElement.remove();
    // delete element from LocalStorage
    removeFromLS(e.target.parentElement.parentElement);

}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        console.log('Tasks are empty, creating new list');
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task)
            tasks.splice(index, 1);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteAllTasks(e) {
    // taskList.innerHTML = '';
    if (confirm('Remove all tasks?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
            removeAllFromLS();
        }
    }
}

function removeAllFromLS() {
    localStorage.clear();
}

function filterTasks(e) {
    // filterValue = filter.value.toLowerCase();
    filterValue = e.target.value.toLowerCase();
    const taskList = document.querySelectorAll('.collection-item');

    taskList.forEach(function (task) {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(filterValue) != -1)
            task.style.display = 'block'
        else
            task.style.display = 'none'
    });
}