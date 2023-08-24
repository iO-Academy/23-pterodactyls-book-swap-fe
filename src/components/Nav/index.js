import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="navBar">
      <a href="/">Books Swap</a>
      <div className="right-links">
        <Link to="/">Available books</Link>
        <Link to="/claimed/">Claimed books</Link>
        <Link to="/add-book">Add book</Link>
      </div>
    </nav>
  );
}

export default Nav;
