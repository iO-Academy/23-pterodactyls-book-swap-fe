import { Link } from 'react-router-dom'
import './claimedBooks.css'
import { useEffect, useState } from 'react'

function ClaimedBooks() {
    const [claimedBooks, setClaimedBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=1')
        .then(res => res.json())
        .then(data => {
            setClaimedBooks(data.data);
            })
    }, []);
    console.log(claimedBooks)
    
    return (
        <div className='flex_container'>
            {claimedBooks.map((book, index) => (
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
    );
}

export default ClaimedBooks