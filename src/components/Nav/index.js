import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="navBar">
      <a href="/">Books Swap</a>
      <div className="right-links">
        <Link href="/">Available books</Link>
        <Link href="/claimed">Claimed books</Link>
        <Link href="/add-book">Add book</Link>
      </div>
    </nav>
  );
}

export default Nav;
