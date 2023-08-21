import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
