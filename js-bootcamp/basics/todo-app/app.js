let todos = getTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};


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


displayTodos(todos);

