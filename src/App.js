import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import Search from './Search';
import SearchButton from './SearchButton';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBook(book, shelf) {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;

        // Filter out the book and append it to the end of the list
        // so it appears at the end of whatever shelf it was added to.
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
      });
    }
  }

  render() {
    const { books } = this.state;
    const SHELVES = [
      {
        title: 'Currently Reading',
        name: 'currentlyReading'
      },
      {
        title: 'Read',
        name: 'read'
      },
      {
        title: 'Want To Read',
        name: 'wantToRead'
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
                  {SHELVES.map(shelf => (
                    <Shelf
                      books={books.filter(book => book.shelf === shelf.name)}
                      shelf={shelf}
                      onUpdateBook={(book, shelf) => {
                        this.updateBook(book, shelf);
                      }}
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
            <Search
              books={books}
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf);
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
