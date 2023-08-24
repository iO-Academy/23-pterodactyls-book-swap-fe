import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  function handleAvailableClick() {
    props.setClaimedUrl(
      "https://book-swap-api.dev.io-academy.uk/api/books?claimed=0"
    );
  }

  function handleClaimedClick() {
    props.setClaimedUrl(
      "https://book-swap-api.dev.io-academy.uk/api/books?claimed=1"
    );
  }

  return (
    <nav className="navBar">
      <a href="/">Books Swap</a>
      <div className="right-links">
        <Link to="/" onClick={handleAvailableClick}>
          Available books
        </Link>
        <Link to="/" onClick={handleClaimedClick}>
          Claimed Book
        </Link>
        <Link to="/add-book">Add book</Link>
      </div>
    </nav>
  );
}

export default Nav;
