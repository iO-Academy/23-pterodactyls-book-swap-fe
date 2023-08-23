import { useEffect, useState } from "react";
import "./addreview.css";

function Form(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [nameError, setNameError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [reviewCharCount, setReviewCharCount] = useState(0);
  const maxReviewLength = 450;

  function handleReviewChange(event) {
    const newReview = event.target.value;
    if (newReview.length <= maxReviewLength) {
      setReview(newReview);
      setReviewCharCount(newReview.length);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNameError("");
    setRatingError("");
    setReviewError("");

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (review.trim() === "") {
      setReviewError("Review is required");
      isValid = false;
    }

    if (isValid) {
      fetch().then().then();
    }

    fetch("https://book-swap-api.dev.io-academy.uk/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        name: `${name}`,
        rating: rating,
        review: `${review}`,
        book_id: id,
      }),

      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  function changeName(event) {
    setName(event.target.value);
  }

  function changeRating(event) {
    setRating(event.target.value);
  }

  const id = props.id;

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <p className="review-title">Please leave a review!</p>
      <label htmlFor="name">Name</label>
      <input
        placeholder="Name"
        id="name"
        type="text"
        value={name}
        onChange={changeName}
      />
      <div className="error-message">{nameError}</div>

      <label htmlFor="rating">Rating (out of 5)</label>
      <input
        id="rating"
        type="number"
        min="0"
        max="5"
        value={rating}
        onChange={changeRating}
      />

      <label htmlFor="review">Review</label>
      <textarea
        id="review"
        value={review}
        onChange={handleReviewChange} 
      />
      <div className="char-count">
        {reviewCharCount} / {maxReviewLength} characters
      </div>
      <div className="error-message">{reviewError}</div>
      <input className="submit" type="submit" />
    </form>
  );
}

export default Form;

