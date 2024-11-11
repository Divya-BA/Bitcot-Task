import React from "react";

const SearchContact = ({ onSearch }) => (
  <input className="search-bar" placeholder="Search by name or mobile" onChange={(e) => onSearch(e.target.value)} />
);

export default SearchContact;
