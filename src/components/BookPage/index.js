import { useParams } from "react-router-dom";
import "./book-page.css";
import placeholder from "./placeholder.png";
import { useEffect, useState } from "react";

function BookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [Genre, setGenre] = useState("");
  const [blurb, setBlurb] = useState("");

  const [reviews, setReviews] = useState([]);
  const [reviewsNum, setReviewsNum] = useState(0);
  const [reviewsAvg, setReviewsAvg] = useState(0);

  const { id } = useParams("");

  useEffect(() => {
    fetch("https://book-swap-api.dev.io-academy.uk/api/books/" + { id })
      .then((res) => res.json())
      .then((info) => {
        setTitle(info.data.title);
        setAuthor(info.data.author);
        setPages(info.data.page_count);
        setGenre(info.data.genre.name);
        setBlurb(info.data.blurb);
        setReviews(info.data.reviews);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  useEffect(() => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    setReviewsAvg(totalRating / reviews.length || 0); // avoid dividing by zero
    setReviewsNum(reviews.length);
  });

  return <></>;
}

export default BookPage;
