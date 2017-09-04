import React from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends React.Component {
  static propTypes = {
    onUpdateBook: PropTypes.func.isRequired
  };

  state = {
    searchResults: [],
    query: ""
  };

  searchBooks(query) {
    BooksAPI.search(query, 20).then(searchResults => {
      if (!searchResults.error) this.setState({ searchResults });
    });
  }

  updateQuery = query => {
    this.setState({ query });
    if (query.length !== 0) this.searchBooks(query);
    else this.setState({ query: "", searchResults: [] });
  };

  render() {
    const { searchResults, query } = this.state;
    const { onUpdateBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.map(book => (
              <Book book={book} onUpdateBook={onUpdateBook} key={book.id} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
