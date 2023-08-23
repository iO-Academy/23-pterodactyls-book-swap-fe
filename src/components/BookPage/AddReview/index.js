import { useEffect, useState } from "react"
import './addreview.css'

function Form(props) {
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')


    function handleSubmit(event) {
        event.preventDefault()
            fetch('https://book-swap-api.dev.io-academy.uk/api/reviews', {
                    method:"POST",
                    body: JSON.stringify({
                        "name": `${name}`,
                        "rating": rating,
                        "review":`${review}`,
                        "book_id": id
                    }),
                    
                    mode: 'cors',
                    headers:{
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            
          
    }

    function changeName(event) {
        setName(event.target.value)
    }

    function changeRating(event) {
        setRating(event.target.value)
    }
    function changeReview(event) {
        setReview(event.target.value)
    }
   const id = props.id
    

    

    return (
        <form className='review-form' onSubmit={handleSubmit}>
            <p className="review-title"> Please leave a review!</p>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={changeName} />  
            <label htmlFor="rating">Rating (out of 5)</label>
            <input id="rating" type="number" min="0" max="5" value={rating} onChange={changeRating} />
            <label htmlFor="review">Review</label>
            <input id="review" type="text" value={review} onChange={changeReview} />
            <input className='submit' type="submit" />
        </form>       
    )
}

export default Form