import React from "react";
import PropTypes from "prop-types";

class ShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  handleSelect = e => {
    e.preventDefault();

    this.props.onUpdateBook(this.props.book, e.target.value);
  };

  render() {
    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelect} value={book.shelf || "none"}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
