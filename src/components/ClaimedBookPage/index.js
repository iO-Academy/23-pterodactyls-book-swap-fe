import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import BookCard from "../BookCard";
import GenreFilter from "../GenreFilter";
import SearchBar from "../SearchBar";

function ClaimedBookPage() {
  const [claimedBooks, setClaimedBooks] = useState([]);
  const [claimedGenreID, setClaimedGenreID] = useState(0);
  const [claimedSearch, setClaimedSearch] = useState("");

  useEffect(() => {
    let url = "https://book-swap-api.dev.io-academy.uk/api/books?claimed=1";

    if (claimedGenreID > 0) {
      url += `&genre=${claimedGenreID}`;
    }

    if (claimedSearch.length > 0) {
      url += `&search=${claimedSearch}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((bookData) => {
        setClaimedBooks(bookData.data);
      });
  }, [claimedGenreID, claimedSearch]);

  return (
    <div>
      <div className="search-container">
        <GenreFilter
          claimedGenreID={claimedGenreID}
          setGenreID={setClaimedGenreID}
        />
        <SearchBar search={claimedSearch} setSearch={setClaimedSearch} />
      </div>
      <div className="flex_container">
        {claimedBooks.map((book, index) => (
          <Link key={index} to={`/Book/${book.id}`}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ClaimedBookPage;
