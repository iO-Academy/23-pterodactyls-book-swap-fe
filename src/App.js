import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import BookContext from "./book-context";
import BookPage from "./components/BookPage";

function App() {



  
  return (
    <div className="App">
      <BrowserRouter>
        <BookContext.Provider value={{




        }}>

          <Nav />
          <Main />
       

          <Routes>
            <Route path="/book/:id" element={<BookPage />}/>
          
          </Routes>

        </BookContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
