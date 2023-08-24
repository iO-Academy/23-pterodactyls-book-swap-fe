import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import BookCard from '../BookCard';
import GenreFilter from '../GenreFilter';
import './home.css'
import SearchBar from '../SearchBar';


function HomePage() {
    const [books, setBooks] = useState([]);
    const [genreID, setGenreID] = useState(0)

    useEffect(() => {
        
        if(genreID > 0){
        fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=0' + '&genre=' + genreID)
            .then(res => res.json())
            .then(bookData => {
                setBooks(bookData.data);
            })}
            else{
            fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=0')
            .then(res => res.json())
            .then(bookData => {
                setBooks(bookData.data);
            })

            }
            ;
}, [genreID]);





    console.log(genreID)

    return (
        <div>
        <div className='search-container'>
        <GenreFilter genreID={genreID} setGenreID={setGenreID}/>
        <SearchBar />
        </div>
        <div className='flex_container'>
            {books.map((book, index) => (
                <Link key={index} to={`/Book/${book.id}`}>
                    <BookCard book={book} />
                </Link>
            ))}
        </div>
        </div>
    );
           
       

}

export default HomePage;