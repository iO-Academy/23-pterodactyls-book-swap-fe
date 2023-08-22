import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import BookContext from "./book-context";
import BookPage from "./components/BookPage";
import ClaimedBooks from "./components/Main/ClaimedBooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BookContext.Provider value={{}}>
          <Nav />

          <Routes>
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/" element={<Main />} />
            <Route path="/claimed/" element={<ClaimedBooks />} />
          </Routes>
        </BookContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
