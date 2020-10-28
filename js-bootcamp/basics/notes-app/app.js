const notes = getSavedNotes();

const filters = {
    searchText: ''
};

// document.querySelector('#name-form').addEventListener('submit', e => {
//     console.log(e.target.elements.firstName.value);
//     e.preventDefault();
// });

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
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    });

    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

// document.querySelector('#input-note').addEventListener('input', (e) => {
//     console.log(e.target.value);
//     console.log(notes);
// });

renderNotes(notes, filters);
