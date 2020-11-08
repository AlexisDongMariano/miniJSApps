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

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(note => {
        return note.id === id;
    });

    if (noteIndex > -1)
        notes.splice(noteIndex, 1);
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const div_note = document.createElement('div')
    // const newNote = document.createElement('span');
    const newNote = document.createElement('a');
    const button = document.createElement('button');

    // setup the remove note button
    button.textContent = 'x'
    div_note.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    if (note.title.length > 0) {
        newNote.textContent = note.title;

    }
    else
        newNote.textContent = 'unnamed note'

    newNote.setAttribute('href', `/edit.html#${note.id}`);

    div_note.appendChild(newNote);

    return div_note;
}


const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt)
                return -1;
            else if (a.updatedAt < b.updatedAt)
                return 1;
            else
                return 0;
        });
    }
    else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt)
                return -1;
            else if (a.createdAt < b.createdAt)
                return 1;
            else
                return 0;
        });
    }
    else {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1;
            else if (a.title.toLowerCase() > b.title.toLowerCase())
                return 1;
            else
                return 0;
        });
    }

}


// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    div_notes = document.querySelector('#notes');
    div_notes.innerHTML = '';

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDOM(note);
        div_notes.appendChild(noteEl);
    });
}

// Generate the last edited message
const changeLastEdited = timestamp => {
    return `Last edited ${moment(timestamp).fromNow()}`;
}