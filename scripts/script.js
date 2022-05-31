let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = () => {
    let readIndicator = this.read ? "already read" : "not read yet";
    return `${title} by ${author}, ${pages} pages, ${readIndicator}`;
}

function addBookToLibrary() {
    let book = new Book();
    myLibrary.push(book);
}

function displayBook(book) {
    const main = document.querySelector("main");
    const newBook = main.createElement('div');
    newBook.classList.add('book');
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}
