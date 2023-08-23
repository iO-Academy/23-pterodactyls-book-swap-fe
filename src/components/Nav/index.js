import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <nav className="navBar">
      <Link to='/'>Books Swap</Link>
      <div className="right-links">
      <Link to='/'>Available books</Link>
      <Link to='/claimed'>Claimed books</Link>
      <Link to='#'>Add book</Link>
      </div>
    </nav>

  )
}

export default Nav;