const library = [];

function Book(title, author, pages, finishedReading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finishedReading = finishedReading;

    this.bookInfo = function() {
        let readingStatus = "not read yet";

        if(this.finishedReading == true){
            readingStatus = "read";
        }

        return `${this.title} by ${this.author}, ${this.pages}, ${readingStatus}`;
    }

    this.currentStatus = function() {
        let readingStatus = "not read yet";
        if(this.finishedReading == true){
            readingStatus = "read";
        }
        return readingStatus;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}


let book1 = new Book("Lalka", "Bolesław Prus", 687, 1);
let book2 = new Book("Bajki robotów", "Stanisław Lem", 190, 1);
addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(library);

library.forEach(book => {
    let card = document.createElement("article");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = book.title;
    card.appendChild(title);
    
    let author = document.createElement("h3");
    author.classList.add("author");
    author.innerText = book.author;
    card.appendChild(author);
    
    let hr = document.createElement("hr");
    card.appendChild(hr);

    let pages = document.createElement("span");
    pages.classList.add("length");
    pages.innerText = book.pages;
    card.appendChild(pages);

    let hr1 = document.createElement("hr")
    card.appendChild(hr1);

    let status = document.createElement("span");
    status.innerText = `Status: ${book.currentStatus()}`;
    card.appendChild(status);

    let cards_section = document.getElementById("cards")
    cards_section.appendChild(card);
});

