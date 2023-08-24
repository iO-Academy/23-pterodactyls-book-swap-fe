import { useEffect, useState } from 'react';
import BookCard from '../BookCard';
import SearchBar from '../SearchBar';


function HomePage() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books?claimed=0')
            .then(res => res.json())
            .then(bookData => {
                setBooks(bookData.data)

            })
    }, [])

    return (
        <div>
            <SearchBar />
        <BookCard books={books} />
        </div>
    )
}

export default HomePage;
