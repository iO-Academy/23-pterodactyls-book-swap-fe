import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  function handleAvailableClick() {
    props.setClaimedUrl(0);
  }

  function handleClaimedClick() {
    props.setClaimedUrl(1);
  }

  return (
    <nav className="navBar">
      <a href="/">Books Swap</a>
      <div className="right-links">
        <Link onClick={handleAvailableClick}>Available books</Link>
        <Link onClick={handleClaimedClick}>Claimed Book</Link>
        <Link to="/add-book">Add book</Link>
      </div>
    </nav>
  );
}

export default Nav;
