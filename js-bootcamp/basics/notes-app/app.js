'use strict'

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

document.querySelector('#filter-by').addEventListener('change', e => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#add-note').addEventListener('click', (e) => {
    console.log(`I'm adding a new note.`);
    const id = uuidv4();
    const timestamp = moment().valueOf();

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });

    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});


renderNotes(notes, filters);

window.addEventListener('storage', e => {
    if (e.key === 'notes')
        notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
});


// // get date now to save in timestamp
// const now = new Date();
// const timestamp = now.getTime();
// console.log('timestamp in milli', timestamp);

// const myDate = new Date(timestamp);
// console.log('timestamp year:', myDate.getFullYear());
// // get date of the timestamp

// const date1 = new Date('August 26 1993');
// const date2 = new Date('September 15 1994');

// const date1_tstamp = date1.getTime();
// const date2_tstamp = date2.getTime();

// if (date1_tstamp > date2_tstamp)
//     console.log(`${date2} happened earlier with ${date2_tstamp.toString()}`);
// else
//     console.log(`${date1} happened earlier with ${date1_tstamp.toString()}`);


// const now1 = moment();
// console.log(now1.toString());
// now1.add(1, 'year').subtract(5, 'days');
// console.log(now1.format('Do of MMMM YYYY'));

// const nowTimestamp = now1.valueOf();
// console.log(nowTimestamp);
// console.log(moment(nowTimestamp).toString());

// const bday = moment();
// bday.year(1993);
// bday.month(7);
// bday.date(26);
// console.log(bday.format('MMMM D, YYYY'));

