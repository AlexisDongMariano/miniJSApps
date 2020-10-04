class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</td>
        `

        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    deleteBook(target) {
        if (target.classList.contains('delete')) {

            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}


class StoreLS {
    static getBooks() {
        let books;

        if (localStorage.getItem('books') === null)
            books = [];
        else
            books = JSON.parse(localStorage.getItem('books'));

        return books
    }

    static displayBooks() {
        const books = StoreLS.getBooks();

        books.forEach(function (book) {
            const ui = new UI;
            ui.addBookToList(book);
        })
    }

    static addBook(book) {
        const books = StoreLS.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = StoreLS.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1); // remove the specific book object
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// DOM load event
document.addEventListener('DOMContentLoaded', StoreLS.displayBooks());


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

            StoreLS.addBook(book);

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

    StoreLS.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('book is deleted', 'success');

    e.preventDefault();
})