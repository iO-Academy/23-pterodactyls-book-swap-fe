import './main.css'
import { Link } from "react-router-dom";

function HomePage(props) {

return (
      <div className='flex_container'>
          {props.books.map((book, index) => (
              <Link key={index} to={`/Book/${book.id}`}>
                  <div className='card'>
                      <img src={book.image} alt={book.title} className='book_image' />
                      <div className='text_container'>
                          <p className='book_title'>{book.title}</p>
                          <p className='book_author'>{book.author}</p>
                          <p className='book_genre'>{book.genre.name}</p>
                      </div>
                  </div>
              </Link>
          ))}
      </div>
  )
}

export default HomePage;
