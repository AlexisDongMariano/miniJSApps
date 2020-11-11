// Read notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    }

}

// Save the notes to localStorage
const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Remove a note from the list
const removeNote = id => {
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex > -1)
        notes.splice(noteIndex, 1);
}

// Generate the DOM structure for a note
const generateNoteDOM = note => {
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

    // if (note.title.length > 0)
    //     newNote.textContent = note.title;
    // else
    //     newNote.textContent = 'unnamed note'
    newNote.textContent = note.title.length > 0 ? note.title : 'unnamed note';
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
    const filteredNotes = notes.filter(
        note => note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    );

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