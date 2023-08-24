import { useState } from "react";
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

  function handleSubmit(event) {
    event.preventDefault();

    const postData = {
      "title": title,
      "author": author,
      "genre_id": genre,
    };

    if (blurb.length != 0) {
      postData.blurb = blurb;
    }

    if (imgUrl.length != 0) {
      postData.image = imgUrl;
    }

    if (year != 0) {
      postData.year = year;
    }

    if (pageCount != 0) {
      postData.page_count = pageCount;
    }

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
          console.log(data);
        }
        setRedirect(true);
      });

    console.log("sucessfully submitted book!");
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
          <option value="">Select an option</option>
          <option value="1">Thrlller</option>
          <option value="2">Romance</option>
          <option value="3">Historical</option>
          <option value="4">Non-fiction</option>
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
        <textarea
          placeholder="Blurb"
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
