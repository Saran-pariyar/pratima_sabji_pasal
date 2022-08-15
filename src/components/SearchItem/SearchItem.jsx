import React from "react";
import "./searchitem.css";

const SearchItem = () => {
  return (
    <section className="search-section">
      <main className="main-search-section">
        <input
          type="text"
          id="search"
          className="search-bar"
          placeholder="Search available fruits and vegetables "
        />
        <button className="submit-btn">Submit</button>
      </main>
    </section>
  );
};

export default SearchItem;
