"use strict";
function isBookReadTS(books, titleToSearch) {
  return books.some((book) => book.title === titleToSearch && book.isRead);
}
const booksTS = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
console.log(isBookReadTS(booksTS, "Devastación")); // true
console.log(isBookReadTS(booksTS, "Canción de hielo y fuego")); // false
console.log(isBookReadTS(booksTS, "Los Pilares de la Tierra")); // false
