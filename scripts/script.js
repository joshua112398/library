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

Book.prototype.display = function() {
    const main = document.querySelector("main");
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    main.appendChild(newBook);

    // Add book information
    const name = document.createElement('h2')
    name.textContent = `${this.title}`;
    console.log(this.title);
    name.classList.add('name');
    newBook.appendChild(name);
    const author = document.createElement('p')
    author.textContent = `By ${this.author}`;
    author.classList.add('author');
    newBook.appendChild(author);
    const pages = document.createElement('p')
    pages.textContent = `${this.pages} pages`;
    pages.classList.add('pages');
    newBook.appendChild(pages);
    let readIndicator = this.read ? "already read" : "not read yet";
    const read = document.createElement('p')
    read.textContent = `By ${this.author}`;
    read.classList.add('read');
    newBook.appendChild(read);

    // Add the Delete and Read buttons
    const buttons = document.createElement('div');
    buttons.classList.add('book-buttons');
    newBook.appendChild(buttons);
    let readButton = document.createElement('button')
    readButton.textContent = "Read";
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete";
    buttons.appendChild(readButton);
    buttons.appendChild(deleteButton);
    return;

}


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    console.log("Book added");
    myLibrary.push(book);
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].display();
    }
    return;
}

addBookToLibrary("Mango", "Josh Bullocks", 74, true);
addBookToLibrary("Mango", "Josh Bullocks", 74, true);
addBookToLibrary("Mango", "Josh Bullocks", 74, true);
displayLibrary();