// get todos from localStorage
const getTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null)
        return JSON.parse(todosJSON);
    else
        return [];
};

// save todos to localStorage
const saveTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
};


// add todo
const addTodo = (todos, newTodo) => {
    todos.push(
        {
            id: uuidv4(),
            text: newTodo,
            completed: false
        }
    );
    saveTodos(todos);
};


const generateSummaryDOM = filteredTodos => {
    const todosLeftCount = filteredTodos.filter(todo => {
        return !todo.completed;
    });

    div_todos.innerHTML = '';
    p_todosLeft = document.createElement('h2');

    p_todosLeft.textContent = `You have ${todosLeftCount.length} todos left`;
    div_todos.appendChild(p_todosLeft);
};


const generateTodoDOM = todo => {
    // declare UI elements
    const div_todo = document.createElement('div');
    const chk_todo = document.createElement('input');
    const btn_removeTodo = document.createElement('button');
    const p_todo = document.createElement('span');

    // setup elements
    chk_todo.setAttribute('type', 'checkbox');
    btn_removeTodo.textContent = 'x';

    div_todo.appendChild(chk_todo);

    // generate the todo text
    if (todo.text.length > 0)
        p_todo.textContent = todo.text;
    else
        p_todo.textContent = 'empty todo';

    // append text and button
    div_todo.appendChild(p_todo);
    div_todo.appendChild(btn_removeTodo);

    return div_todo;
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

    generateSummaryDOM(filteredTodos);

    filteredTodos.forEach(todo => {
        div_todos.appendChild(generateTodoDOM(todo));
    })
}


// filter todos
function filterText(todos, filters) {
    return todos.filter(todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
}