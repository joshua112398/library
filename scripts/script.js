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

function displayBooks() {
    
}
