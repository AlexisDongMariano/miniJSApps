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

// UI Components
input_search = document.querySelector('#search-text');
div_todos = document.querySelector('#todos');

// Event listeners
input_search.addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    console.log(filters.searchText);
    filterText(todos, filters);
});

const filters = {
    searchText: ''
};



const displayTodos = todos => {

    const todosLeftCount = todos.filter(todo => {
        return !todo.completed;
    });

    div_todos.innerHTML = '';

    p_todosLeft = document.createElement('h2');
    p_todosLeft.textContent = `You have ${todosLeftCount.length} todos left`;
    div_todos.appendChild(p_todosLeft);


    todos.forEach(todo => {
        let p_todo = document.createElement('p');
        p_todo.textContent = todo.text;
        div_todos.appendChild(p_todo);
    })
}

function filterText(todos, filters) {
    const filteredTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    displayTodos(filteredTodos);

}



displayTodos(todos);

