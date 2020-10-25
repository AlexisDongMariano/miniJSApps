const notes = getSavedNotes();

const filters = {
    searchText: ''
};

document.querySelector('#name-form').addEventListener('submit', e => {
    console.log(e.target.elements.firstName.value);
    e.preventDefault();
});

document.querySelector('#filter-by').addEventListener('change', e => {
    console.log(e);
    console.log(e.target.value);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#add-note').addEventListener('click', (e) => {
    console.log(`I'm adding a new note.`);
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    });

    saveNotes(notes);
    renderNotes(notes, filters);
});

document.querySelector('#input-note').addEventListener('input', (e) => {
    console.log(e.target.value);
    console.log(notes);
});

renderNotes(notes, filters);
