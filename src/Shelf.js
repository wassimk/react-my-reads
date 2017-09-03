import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

class Shelf extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired
  }

  render() {
    const { books, shelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>Books Go Here</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
