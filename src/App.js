import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import BookPage from "./components/BookPage";
import ClaimedBooks from "./components/ClaimedBooks";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
      fetch('https://book-swap-api.dev.io-academy.uk/api/books')
          .then(res => res.json())
          .then(bookData => {
              setBooks(bookData.data)
              
          })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
       
          <Nav />

          <Routes>
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/" element={<HomePage books={books} />} />
            <Route path="/claimed/" element={<ClaimedBooks books={books} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
