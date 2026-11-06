// Dynamic data: the book list. To add a book, add one more object here
// (and put its cover in images/). The page builds the cards automatically.
// Save each real cover image in the images/ folder with the name shown below.
const BOOKS = [
  // ---- Stories > Romance ----
  { id: 1,  title: "Pride and Prejudice",                          author: "Jane Austen",                      price: 9.99,  category: "Stories",     sub: "Romance",     image: "images/book1.jfif" },
  { id: 2,  title: "The Notebook",                                 author: "Nicholas Sparks",                  price: 11.99, category: "Stories",     sub: "Romance",     image: "images/book2.jfif" },

  // ---- Stories > Fantasy ----
  { id: 3,  title: "The Hobbit",                                   author: "J.R.R. Tolkien",                   price: 12.99, category: "Stories",     sub: "Fantasy",     image: "images/book3.jfif" },
  { id: 4,  title: "Harry Potter and the Sorcerer's Stone",        author: "J.K. Rowling",                     price: 14.99, category: "Stories",     sub: "Fantasy",     image: "images/book4.jfif" },

  // ---- Stories > Mystery ----
  { id: 5,  title: "Murder on the Orient Express",                 author: "Agatha Christie",                  price: 10.99, category: "Stories",     sub: "Mystery",     image: "images/book5.jfif" },
  { id: 6,  title: "The Da Vinci Code",                            author: "Dan Brown",                        price: 13.99, category: "Stories",     sub: "Mystery",     image: "images/book6.jfif" },

  // ---- Educational > Programming ----
  { id: 7,  title: "Clean Code",                                   author: "Robert C. Martin",                 price: 35.00, category: "Educational", sub: "Programming", image: "images/book7.jfif" },
  { id: 8,  title: "Eloquent JavaScript",                          author: "Marijn Haverbeke",                 price: 28.00, category: "Educational", sub: "Programming", image: "images/book8.jfif" },

  // ---- Educational > Networking ----
  { id: 9,  title: "Computer Networking: A Top-Down Approach",     author: "James F. Kurose & Keith W. Ross",  price: 45.00, category: "Educational", sub: "Networking",  image: "images/book9.jfif" },
  { id: 10, title: "CCNA 200-301 Official Cert Guide",             author: "Wendell Odom",                     price: 40.00, category: "Educational", sub: "Networking",  image: "images/book10.jfif" },

  // ---- Educational > Science ----
  { id: 11, title: "A Brief History of Time",                      author: "Stephen Hawking",                  price: 15.00, category: "Educational", sub: "Science",     image: "images/book11.jfif" },
  { id: 12, title: "Cosmos",                                       author: "Carl Sagan",                       price: 16.00, category: "Educational", sub: "Science",     image: "images/book12.jfif" }
];