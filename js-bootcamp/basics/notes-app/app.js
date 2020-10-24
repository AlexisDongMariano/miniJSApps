// const notes = [{
//     title: 'my next trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]
let notes = [];


document.querySelector('#name-form').addEventListener('submit', e => {
    console.log(e.target.elements.firstName.value);
    e.preventDefault();
})

document.querySelector('#filter-by').addEventListener('change', e => {
    console.log(e);
    console.log(e.target.value);
});

const filters = {
    searchText: ''
};


const notesJSON = localStorage.getItem('notes');
if (notesJSON !== null)
    notes = JSON.parse(notesJSON);

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    div_notes = document.querySelector('#notes');
    div_notes.innerHTML = '';

    filteredNotes.forEach(note => {
        h4_new = document.createElement('h4');

        if (note.title.length > 0)
            h4_new.textContent = note.title;
        else
            h4_new.textContent = 'unnamed note'

        div_notes.appendChild(h4_new);
    })
}

renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#add-note').addEventListener('click', (e) => {
    console.log(`I'm adding a new note.`);
    notes.push({
        title: '',
        body: ''
    });
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
})

document.querySelector('#input-note').addEventListener('input', (e) => {
    console.log(e.target.value);
    console.log(notes);
})

