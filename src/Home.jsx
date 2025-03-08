import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./components/BookCard"; // Since BookCard.jsx is in the same folder
import books from "./booksData"; // booksData.jsx is one level up
import "./Home.css"; // Home.css is in the same folder

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>

      {/* Add Book Button */}
      <Link to="/add-book" className="add-book-button">
        Add Book
      </Link>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
