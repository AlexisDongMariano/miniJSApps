const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


document.querySelector('#name-form').addEventListener('submit', e => {
    console.log(e.target.elements.firstName.value);
    e.preventDefault();
})

const filters = {
    searchText: ''
};

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    div_notes = document.querySelector('#notes');
    div_notes.innerHTML = '';

    filteredNotes.forEach(note => {
        h4_new = document.createElement('h4');
        h4_new.textContent = note.title;
        div_notes.appendChild(h4_new);
    })
}

renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log(`I'm adding a new todo.`);
})

document.querySelector('#input-todo').addEventListener('input', (e) => {
    console.log(e.target.value);
})