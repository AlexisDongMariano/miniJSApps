// Read notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null)
        return JSON.parse(notesJSON);
    else
        return [];
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}


// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    h4_new = document.createElement('h4');

    if (note.title.length > 0)
        h4_new.textContent = note.title;
    else
        h4_new.textContent = 'unnamed note'

    return h4_new;
}


// Render application notes
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    div_notes = document.querySelector('#notes');
    div_notes.innerHTML = '';

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDOM(note);
        div_notes.appendChild(h4_new);
    });
}