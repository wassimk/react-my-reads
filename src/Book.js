import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  render() {
    const { book, onUpdateBook } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />

            <ShelfChanger book={book} onUpdateBook={onUpdateBook} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
