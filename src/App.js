import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import BookContext from "./book-context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BookContext.Provider value={{}}>
          <Main />
          <Nav />
        </BookContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
