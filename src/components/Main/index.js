import { Route, Routes } from "react-router-dom";
import BookDisplay from "./BookDisplay";
import './main.css'

function Main() {
  return (
    <div className="main_body">
      <BookDisplay />
    </div>
  );
}

export default Main;
