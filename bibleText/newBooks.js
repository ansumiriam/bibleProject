var newTestamentBooks = [
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians", 
  "1 Timothy", 
  "2 Timothy", 
  "Titus", 
  "Philemon", 
  "Hebrews", 
  "James", 
  "1 Peter", 
  "2 Peter", 
  "1 John", 
  "2 John", 
  "3 John", 
  "Jude", 
  "Revelation"
];
const prelink = '<a href = "read.html?book='
const postparam = '">'
const postlink = '</a>'
newTestamentBooks.forEach(createLinks);

function createLinks(book) {
  document.getElementById("books-div").innerHTML += prelink + book + postparam + book + postlink;
}
