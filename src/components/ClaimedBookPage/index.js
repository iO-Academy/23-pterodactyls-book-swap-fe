import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import BookCard from '../BookCard';

function ClaimedBookPage() {
    const [claimedBooks, setClaimedBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=1')
            .then(res => res.json())
            .then(data => {
                setClaimedBooks(data.data);
            });
    }, []);

    return (
        <div className='flex_container'>
            {claimedBooks.map((book, index) => (
                <Link key={index} to={`/Book/${book.id}`}>
                    <BookCard book={book} />
                </Link>
            ))}
        </div>
    );
}

export default ClaimedBookPage;