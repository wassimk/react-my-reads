import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class SearchButton extends React.Component {
  render() {
    return (
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    );
  }
}

export default SearchButton;
