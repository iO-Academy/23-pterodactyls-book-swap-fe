import "./nav.css"

function Nav() {
  return (
    <nav className="navBar">
      <a href='/'>Books Swap</a>
      <div className="right-links">
      <a href='#'>Available books</a>
      <a href='claimed'>Claim books</a>
      <a href='#'>Add book</a>
      </div>
    </nav>

  )
}

export default Nav;