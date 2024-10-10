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
}

function addBookToLibrary(book) {
    library.push(book);
}


let book1 = new Book("title", "author", 222, 1);

addBookToLibrary(book1);


