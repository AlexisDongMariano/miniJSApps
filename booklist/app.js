// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
    const list = document.querySelector('#book-list');

    // create tr element
    const row = document.createElement('tr')
    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete">X</td>
    `

    list.appendChild(row);
}

UI.prototype.showAlert = function (message, className) {
    // create the alert element
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
}


// delete book
UI.prototype.deleteBook = function (target) {
    // if (target.className === 'delete') {
    //     target.parentElement.parentElement.remove();
    // }
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}


// Event Listeners
document.querySelector('#book-form').addEventListener('submit',
    function (e) {
        // form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        // instantiate UI
        const ui = new UI();

        // Validate
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill in all fields', 'error');
        }
        else {
            // instantiate book object
            const book = new Book(title, author, isbn);

            ui.addBookToList(book);

            ui.clearFields();

            ui.showAlert('Book successfully added', 'success')
        }


        e.preventDefault();
    }
);


// delete EventListener
document.querySelector('#book-list').addEventListener('click', function (e) {
    // instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('book is deleted', 'success');

    console.log('delete');
    e.preventDefault();
})