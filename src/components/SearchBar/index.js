import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import { useState } from "react";
function SearchBar() {
  const [input, setInput] = useState("");

  function handleSubmit() {
    fetch("https://book-swap-api.dev.io-academy.uk/api/books")
      .then((res) => res.json())
      .then((books) => {
        const results = books.data.filter((user) => {
          return user && user.title && user.title.toLowerCase().includes(input);
        });
      });
  }

  function handleChange(event) {
    setInput(event.taget.value);
  }

  return (
    <div className="searchbar">
      <FaSearch id="search-icon" onClick={handleSubmit} />
      <input
        id="search-input"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBar;
