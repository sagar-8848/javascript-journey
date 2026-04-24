// ? Small Library Management System

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.releaseYear = year;
    this.isAvailable = true;
  }

  // ? methods

  checkOut() {
    if (!this.isAvailable) return `book not available at the moment!`;
    this.isAvailable = false;
    return "check out successful";
  }

  returnBook() {
    this.isAvailable = true;
    return `Book returned, Thank you! `;
  }

  getInfo() {
    return `The book is ${this.title} by ${this.author} in ${this.releaseYear} AvailableStatus: ${this.isAvailable ? "Available" : "Not Available for now!"}`;
  }
}


// ? time for inheritance and polymorphism

class Ebook extends Book {
  constructor(bookName, bookAuthor, bookYear, fileSize, format) {
    super(bookName, bookAuthor, bookYear);
    this.fileSize = fileSize;
    this.format = format;
  }

  getInfo() {
    return `The book is ${this.title} by ${this.author} in ${this.releaseYear}, fileSize${this.fileSize}m Format: ${this.format}`;
  }
}

class LibraryManager {
  #books;
  constructor(managerName) {
    this.manager = managerName;
    this.#books = [];
  }

  // * adding the books to the library (books array)

  addBook(bookDet) {
    // we will be passing full book object not only the book name

    // ! validation 

    if(!(bookDet instanceof Book)){
      return `Only Books or E-books allowed!`
    }
    this.#books.push(bookDet);
    return `${bookDet.title} has been added to the library!`;
  }

  // ? remove #books
  removeBooks(book) {
    let lenBeforeremv = this.#books.length;

    
    this.#books = this.#books.filter((curItem) => {
      return curItem.title.toLowerCase() != book.toLowerCase();
    });
    if(lenBeforeremv === this.#books.length){
      return `No Book Found!`
    }
    else{

      return`${book} deleted success1`
    }
   
  }

  // ? find books

  findBooks(userQuery) {
    let searchedBooks = this.#books.filter((curBooks) =>
      curBooks.title.toLowerCase().includes(userQuery.toLowerCase()),
    );
    return searchedBooks;
  }

  // ? show available books
  showAvailabeBooks() {
    let availableBooks = this.#books.filter(
      (curAvailablebooks) => curAvailablebooks.isAvailable === true,
    );
    return availableBooks;
  }

  // ? get all books
  getAllBooks() {
    return this.#books.map(curBook => curBook.getInfo());
  }
}



let b1 = new Book("harry potter", " rouling", 2055);
let b2 = new Book("Mark harry ", "jk", 2075);
let b3 = new Book("potter", "random", 2895);
let e1 = new Ebook("ebook1", "author1", 2000, '200Mb', 'pdf')
let e2 = new Ebook("ebook2", "author2", 2001, '20Mb', 'docs')
let e3 = new Ebook("ebook3", "author3", 2003, '2Mb', 'jpg');
let e4 = new Ebook("ebook4", "author4", 2066, '212Mb', 'jpeg');

let manager = new LibraryManager('sagar')
console.log(manager.addBook(b1));
console.log(manager.addBook(b2));
console.log(manager.addBook(b3));
console.log(manager.addBook(e1));
console.log(manager.addBook(e2));
console.log(manager.addBook(e3));
console.log(manager.addBook(e4))

console.log(manager.removeBooks('ebook1'));

console.log(manager.showAvailabeBooks());


