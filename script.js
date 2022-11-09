let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary() {
  const title = prompt("Enter book title:");
  const author = prompt("Enter book author:");
  const pages = prompt("Enter number of pages in book:");
  const read = prompt("Have you read this book? (true/false)");
  library.push(new Book(title, author, pages, read));
};

library.push(new Book("The Hobbit", "JRR Tolkien", 395, true));
library.push(new Book("The Lord of the Rings", "JRR Tolkien", 1000, false));

function displayLibrary() {
  library.forEach((book) => {
    const tr = document.createElement('tr');
    for (let key in book) {
      td = document.createElement('td')
      td.textContent = book[key]
      tr.appendChild(td)
    }
    let tableBody = document.querySelector('table').lastElementChild;
    tableBody.appendChild(tr)
  });
};