import { useEffect, useState } from "react";
import BookDisplay from "./BookDisplay";
import './main.css'

function Main() {

  const [books, setBooks] = useState([])
  useEffect(() => {
      fetch('https://book-swap-api.dev.io-academy.uk/api/books')
          .then(res => res.json())
          .then(bookData => {
              setBooks(bookData.data)
              console.log(bookData)
          })
  }, [])

  return (
    <div className="main_body">
      <BookDisplay books={books} />

    </div>
  );
}

export default Main;
