import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import { useState } from "react";
function SearchBar() {
  const [input, setInput] = useState();

  const fetchData = (value) => {
    fetch("https://book-swap-api.dev.io-academy.uk/api/books")
      .then((res) => res.json())
      .then((books) => {
        const results = books.data.filter((user) => {
          return user && user.title && user.title.toLowerCase().includes(value);
        });
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="searchbar">
      <FaSearch id="search-icon" />
      <input
        id="search-input"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
