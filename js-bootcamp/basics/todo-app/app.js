const todos = [
    {
        text: 'Order Cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
]

// You have x todos left (p element)
// Add a p element for each above (use text value)
// 1. setup a div contain for todos
// 2. setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data
// 1. Create a form with a single input for todo text
// 2. Setup and submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application
// 1. Create a checkbox and setup event listener --> "Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted a rerenderer list on checkbox change
// 4. Setup renderTodos to remove completed items

// UI Components
input_search = document.querySelector('#search-text');
div_todos = document.querySelector('#todos');
form_addTodo = document.querySelector('#add-todo');
chkbox_hideCompleted = document.querySelector('#hide-completed');

// Event listeners
input_search.addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    displayTodos(todos);
});

form_addTodo.addEventListener('submit', e => {
    addTodo(todos, e.target.newTodo.value);
    e.target.newTodo.value = '';
    displayTodos(todos);
    e.preventDefault();
});

chkbox_hideCompleted.addEventListener('change', e => {
    filters.hideCompleted = e.target.checked;
    displayTodos(todos);

});


const filters = {
    searchText: '',
    hideCompleted: false
};


const displayTodos = todos => {
    let filteredTodos = filterText(todos, filters);
    filteredTodos = hideComplete(filteredTodos, filters);

    const todosLeftCount = filteredTodos.filter(todo => {
        return !todo.completed;
    });

    div_todos.innerHTML = '';

    p_todosLeft = document.createElement('h2');

    p_todosLeft.textContent = `You have ${todosLeftCount.length} todos left`;
    div_todos.appendChild(p_todosLeft);

    filteredTodos.forEach(todo => {
        let p_todo = document.createElement('p');
        p_todo.textContent = todo.text;
        div_todos.appendChild(p_todo);
    })
}


function addTodo(todos, newTodo) {
    todos.push(
        {
            text: newTodo,
            completed: false
        }
    );
}

function filterText(todos, filters) {
    return todos.filter(todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
}

function hideComplete(todos, filters) {
    return todos.filter(todo => {
        // return if the the filter is set to False or the todo is not yet completed
        return !filters.hideCompleted || !todo.completed;
    });
}


displayTodos(todos);

