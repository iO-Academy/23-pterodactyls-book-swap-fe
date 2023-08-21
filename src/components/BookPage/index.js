import { useParams } from "react-router-dom";
import "./book-page.css";
import placeholder from "./placeholder.png";

function BookPage() {
  const { id } = useParams("");

  return (
    <div>
      <h1>hello</h1>
      <img src={placeholder}></img>
    </div>
  );
}

export default BookPage;
