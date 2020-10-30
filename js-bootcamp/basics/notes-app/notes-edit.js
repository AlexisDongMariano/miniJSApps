const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(note => {
    return note.id === noteId;
});

console.log(note);

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
