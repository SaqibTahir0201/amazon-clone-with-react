import React from "react";

export default function NavbarSearch() {
  return (
    <div className="navbar-search">
      <select className="search-select">
        <option>All</option>
      </select>
      <input placeholder="search amazon" className="search-input placeholder-black caret-black" />
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
