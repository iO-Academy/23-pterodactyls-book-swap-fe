import { useEffect, useState } from "react";
import "./add-book.css";
import { Navigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(0);
  const [pageCount, setPageCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [blurb, setBlurb] = useState("");

  const [bookGenres, setBookGenres] = useState([]);

  const [redirect, setRedirect] = useState(false);

  const [titleErrors, setTitleErrors] = useState("");
  const [authorErrors, setAuthorErrors] = useState("");
  const [genreErrors, setGenreErrors] = useState("");

  function changeTitle(event) {
    setTitle(event.target.value);
  }
  function changeAuthor(event) {
    setAuthor(event.target.value);
  }
  function changeGenre(event) {
    setGenre(event.target.value);
  }
  function changeYear(event) {
    setYear(event.target.value);
  }
  function changePageCount(event) {
    setPageCount(event.target.value);
  }
  function changeImgUrl(event) {
    setImgUrl(event.target.value);
  }
  function changeBlurb(event) {
    setBlurb(event.target.value);
  }

  useEffect(() => {
    fetch("https://book-swap-api.dev.io-academy.uk/api/genres")
      .then((res) => res.json())
      .then((data) => {
        setBookGenres(data.data);
      });
  }, []);

  function generatePostData() {
    const postData = {
      "title": title,
      "author": author,
      "genre_id": genre,
    };

    if (blurb && blurb.length != 0) {
      postData.blurb = blurb;
    }

    if (imgUrl && imgUrl.length != 0) {
      postData.image = imgUrl;
    }

    if (year && year != 0) {
      postData.year = year;
    }

    if (pageCount && pageCount != 0) {
      postData.page_count = pageCount;
    }
    return postData;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const postData = generatePostData();

    fetch("https://book-swap-api.dev.io-academy.uk/api/books", {
      method: "POST",

      // putting data into json
      body: JSON.stringify(postData),
      mode: "cors",
      // Telling the API that we're sending JSON, and we want JSON back
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setTitleErrors(data.errors.title);
          setAuthorErrors(data.errors.author);
          setGenreErrors(data.errors.genre_id);
        } else {
          setRedirect(true);
        }
      });
  }

  return (
    <form className="addform" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title (required)</label>
        <input
          type="input"
          name="title"
          placeholder="Title"
          onChange={changeTitle}
        />
      </div>
      <div className="field">
        <label htmlFor="author">Author (required)</label>
        <input
          type="input"
          name="author"
          placeholder="Author"
          onChange={changeAuthor}
        />
      </div>
      <div className="field">
        <label htmlFor="genre">Genre (required)</label>
        <select
          type="input"
          name="genre"
          placeholder="None selected"
          onChange={changeGenre}
        >
          <option className="dropdown" value={0}>
            All
          </option>
          {bookGenres.map((genre) => (
            <option className="dropdown" value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="year">Year</label>
        <input
          type="input"
          name="year"
          placeholder="2000"
          onChange={changeYear}
        />
      </div>
      <div className="field">
        <label htmlFor="page-count">Page Count</label>
        <input
          type="input"
          name="page-count"
          placeholder="0"
          onChange={changePageCount}
        />
      </div>
      <div className="field">
        <label htmlFor="img-url">Image URL</label>
        <input
          type="input"
          name="img-url"
          placeholder="Image URL"
          onChange={changeImgUrl}
        />
      </div>
      <div className="field">
        <label htmlFor="blurb">Blurb</label>
        <textarea
          placeholder="Blurb"
          name="blurb"
          rows="4"
          cols="50"
          onChange={changeBlurb}
        ></textarea>
      </div>
      <div className="field">
        <button className="submit-button">Add book</button>
      </div>
      <div className="errors">
        <p>{titleErrors}</p>
        <p>{authorErrors}</p>
        <p>{genreErrors}</p>
      </div>

      {redirect && <Navigate replace to="/" />}
    </form>
  );
}

export default AddBook;
