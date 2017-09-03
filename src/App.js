import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf";
import SearchButton from "./SearchButton";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;
    const shelves = [
      {
        title: "Currently Reading",
        name: "currentlyReading"
      },
      {
        title: "Read",
        name: "read"
      },
      {
        title: "Want To Read",
        name: "wantToRead"
      }
    ];

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {shelves.map(shelf => (
                    <Shelf
                      books={books.filter(book => book.shelf === shelf.name)}
                      shelf={shelf}
                      key={shelf.name}
                    />
                  ))}
                </div>
              </div>
              <div className="list-books-content" />
              <div className="open-search">
                <SearchButton />
              </div>
            </div>
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">
                  Close
                </Link>

                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid" />
                {/* Search Results Here */}
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
