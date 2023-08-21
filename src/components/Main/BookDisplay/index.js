import { useEffect } from 'react'
import './bookDisplay.css'

function BookDisplay() {

    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(res => res.json())
            .then(bookData => {
                console.log(bookData)
            })
    }, [])

    return (
        <>

        </>
    )
}

export default BookDisplay