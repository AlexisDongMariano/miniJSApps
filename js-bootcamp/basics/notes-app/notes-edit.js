const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => {
    return note.id === noteId;
});


if (note === undefined)
    location.assign('/index.html');


const inp_title = document.querySelector('#note-title');
const inp_body = document.querySelector('#note-body');
const btn_remove = document.querySelector('#remove-note');

inp_title.value = note.title;
inp_body.value = note.body;

inp_title.addEventListener('input', e => {
    note.title = e.target.value;
    saveNotes(notes);
});

inp_body.addEventListener('input', e => {
    note.body = e.target.value;
    saveNotes(notes);
});

btn_remove.addEventListener('click', e => {
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
});

window.addEventListener('storage', e => {
    console.log('new data changes');
    console.log(e);

    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(note => {
            return note.id === noteId;
        });

        if (note === undefined)
            location.assign('/index.html');

        inp_title.value = note.title;
        inp_body.value = note.body;
    }
});
