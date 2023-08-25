import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="navBar">
      <a href="/" className="bookSwap">
        Books Swap
      </a>
      <div className="right-links">
        <Link to="/available/">Available books</Link>
        <Link to="/claimed/">Claimed Book</Link>
        <Link to="/add-book">Add book</Link>
      </div>
    </nav>
  );
}

export default Nav;
