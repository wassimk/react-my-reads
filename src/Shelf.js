import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import "./App.css";

class Shelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired
  };

  render() {
    const { books, shelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <Book book={book} key={book.id} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
