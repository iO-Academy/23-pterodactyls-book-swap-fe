import { useEffect, useState } from 'react'
import BookCard from '../BookCard';

function ClaimedBookPage() {
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
     <BookCard books={claimedBooks}/>
    );
}

export default ClaimedBookPage