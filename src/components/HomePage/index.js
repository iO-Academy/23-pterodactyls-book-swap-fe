import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import BookCard from '../BookCard';

function HomePage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=0')
            .then(res => res.json())
            .then(bookData => {
                setBooks(bookData.data);
            });
    }, []);

    return (
        <div className='flex_container'>
            {books.map((book, index) => (
                <Link key={index} to={`/Book/${book.id}`}>
                    <BookCard book={book} />
                </Link>
            ))}
        </div>
    );
}

export default HomePage;