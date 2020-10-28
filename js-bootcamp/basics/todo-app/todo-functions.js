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

// Remove a single todo
const removeTodo = id => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id;
    });

    if (todoIndex > -1)
        todos.splice(todoIndex, 1);
}


const toggleTodo = id => {
    const todo = todos.find(todo => {
        return todo.id == id;
    });

    if (todo !== undefined)
        todo.completed = !todo.completed;
}

const generateTodoDOM = todo => {
    // declare UI elements
    const div_todo = document.createElement('div');
    const chk_todo = document.createElement('input');
    const btn_removeTodo = document.createElement('button');
    const p_todo = document.createElement('span');

    // setup elements
    chk_todo.setAttribute('type', 'checkbox');
    chk_todo.checked = todo.completed;
    div_todo.appendChild(chk_todo);
    chk_todo.addEventListener('change', e => {
        console.log('TODO:', todo);
        toggleTodo(todo.id);
        saveTodos(todos);
        displayTodos(todos)
    });

    btn_removeTodo.textContent = 'x';
    btn_removeTodo.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        displayTodos(todos);
    });



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