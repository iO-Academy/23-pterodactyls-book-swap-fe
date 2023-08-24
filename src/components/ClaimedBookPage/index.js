import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import BookCard from '../BookCard';
import GenreFilter from '../GenreFilter';

function ClaimedBookPage() {
    const [claimedBooks, setClaimedBooks] = useState([]);
    const [claimedGenreID, setClaimedGenreID] = useState(0)


    useEffect(() => {
        
        if(claimedGenreID > 0){
            fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=1' + '&genre=' + claimedGenreID)
                .then(res => res.json())
                .then(bookData => {
                    setClaimedBooks(bookData.data);
                })}
                else{
                fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=1')
                .then(res => res.json())
                .then(bookData => {
                    setClaimedBooks(bookData.data);
                })
    
                }
    }, [claimedGenreID]);

    return (

        <div>
        <div className='search-container'>
        <GenreFilter claimedGenreID={claimedGenreID} setGenreID={setClaimedGenreID}/>
        </div>
        <div className='flex_container'>
            {claimedBooks.map((book, index) => (
                <Link key={index} to={`/Book/${book.id}`}>
                    <BookCard book={book} />
                </Link>
            ))}
        </div>
        </div>
    );
}

export default ClaimedBookPage;