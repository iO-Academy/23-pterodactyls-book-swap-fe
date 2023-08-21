import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './bookDisplay.css'


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
                    <div key={index} className='card'>
                        <img src={book.image} className='book_image' />
                        <p className='book_title'>{book.title}</p>
                        <p className='book_author'>{book.author}</p>
                        <p className='book_genre'>{book.genre.name}</p>
                    </div>
                ))}
        </div>
    )

}

    // function BookDisplay() {

    //     const {id} = useParams()
    //     const [title, setTitle] = useState('')
    //     const [author, setAuthor] = useState('')
    //     const [genre, setGenre] = useState('')
    //     const [image, setImage] = useState('')

    //     useEffect(() => {
    //         fetch('https://book-swap-api.dev.io-academy.uk/api/books/' + id)
    //             .then(res => res.json())
    //             .then(bookData => {
    //                 console.log(bookData)
    //                 bookData.map(item => {
    //                 setTitle(item.bookData.title)
    //                 setAuthor(item.bookData.author)
    //                 setGenre(item.bookData.genre)
    //                 setImage(item.bookData.image)
    //             })
    //             })
    //     }, [id])

    //     return (
    //         <div>
    //             <p>Title: {title}</p>
    //             <p>Author: {author}</p>
    //             <p>Genre: {genre}</p>
    //             <p>image: {image}</p>
    //         </div>
    //     )
    // }

    export default BookDisplay