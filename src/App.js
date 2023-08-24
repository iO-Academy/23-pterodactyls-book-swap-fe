import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import BookPage from "./components/BookPage";
import ClaimedBookPage from "./components/ClaimedBookPage";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/claimed/" element={<ClaimedBookPage />} />
          <Route path="/add-book/" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
