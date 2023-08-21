import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Nav from "./Nav";

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
