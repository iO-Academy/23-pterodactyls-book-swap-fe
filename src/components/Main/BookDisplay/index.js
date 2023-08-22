import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './bookDisplay.css'
import { Link } from 'react-router-dom';


function BookDisplay() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(res => res.json())
            .then(bookData => {
                setBooks(bookData.data)
            })
    }, [])
    return (
        <div className='flex_container'>
            {books.map((book, index) => (
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

export default BookDisplay