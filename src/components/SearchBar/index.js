import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import { useState } from "react";

function SearchBar(props) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    props.setSearch(input);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="searchbar">
      <FaSearch id="search-icon" onClick={handleSubmit}/>
      <input
        id="search-input"
        type="input"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBar;
