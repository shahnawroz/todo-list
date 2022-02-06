import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div>
      <form id="to-do-form">
        <input type="text" placeholder="Enter task"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default SearchBox;
