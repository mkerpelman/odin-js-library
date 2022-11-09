let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${ this.read ? "read" : "not yet read"}.`;
};

function addBookToLibrary() {
  const title = prompt("Enter book title:");
  const author = prompt("Enter book author:");
  const pages = prompt("Enter number of pages in book:");
  const read = prompt("Have you read this book? (true/false)");
  library.push(new Book(title, author, pages, read));
};