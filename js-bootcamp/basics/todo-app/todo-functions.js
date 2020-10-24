// get todos from localStorage
const getTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null)
        return JSON.parse(todosJSON);
    else
        return [];
};


// add todo
const addTodo = (todos, newTodo) => {
    todos.push(
        {
            text: newTodo,
            completed: false
        }
    );
    localStorage.setItem('todos', JSON.stringify(todos));
};


const generateDOM = todo => {
    let p_todo = document.createElement('p');

    if (todo.text.length > 0)
        p_todo.textContent = todo.text;
    else
        p_todo.textContent = 'empty todo';

    return p_todo;
}


const hideComplete = (todos, filters) => {
    return todos.filter(todo => {
        // return if the the filter is set to False or the todo is not yet completed
        return !filters.hideCompleted || !todo.completed;
    });
}


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
        const p_todo = generateDOM(todo);
        div_todos.appendChild(p_todo);
    })
}

// filter todos
function filterText(todos, filters) {
    return todos.filter(todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
}