import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [blurb, setBlurb] = useState("");

  const [titleErrors, setTitleErrors] = useState("");
  const [authorErrors, setAuthorErrors] = useState("");
  const [genreErrors, setGenreErrors] = useState("");
  const [yearErrors, setYearErrors] = useState("");
  const [pageCountErrors, setPageCountErrors] = useState("");
  const [imgUrlErrors, setImgUrlErrors] = useState("");
  const [blurbErrors, setBlurbErrors] = useState("");

  function changeTitle(event) {
    setTitle(event.title.value);
  }
  function changeAuthor(event) {
    setAuthor(event.title.value);
  }
  function changeGenre(event) {
    setGenre(event.title.value);
  }
  function changeYear(event) {
    setYear(event.title.value);
  }
  function changePageCount(event) {
    setPageCount(event.title.value);
  }
  function changeImgUrl(event) {
    setImgUrl(event.title.value);
  }
  function changeBlurb(event) {
    setBlurb(event.title.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://book-swap-api.dev.io-academy.uk/api/books/", {
      method: "PUT",

      // putting data into json
      body: JSON.stringify({
        "data": {
          "title": title,
          "author": author,
          "blurb": blurb,
          "image": imgUrl,
          "page_count": pageCount,
          "claimed_by_name": null,
          "year": year,
          "genre": { "name": genre },
          "reviews": [{}],
        },
      }),
      mode: "cors",
      // Telling the API that we're sending JSON, and we want JSON back
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTitleErrors(data.errors.title);
        setAuthorErrors(data.errors.author);
        setBlurbErrors(data.errors.blurb);
        setImgUrlErrors(data.errors.image);
        setPageCountErrors(data.errors.page_count);
        setYearErrors(data.errors.year);
        setGenreErrors(data.errors.genre);
      });
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div>
        <label for="title">Title (required)</label>
        <input
          type="input"
          name="title"
          placeholder="Title"
          onChange={changeTitle}
        />
      </div>
      <div>
        <label for="author">Author (required)</label>
        <input
          type="input"
          name="author"
          placeholder="Author"
          onChange={changeAuthor}
        />
      </div>
      <div>
        <label for="genre">Genre (required)</label>
        <select
          type="input"
          name="genre"
          placeholder="None selected"
          onChange={changeGenre}
        >
          <option value="">Select an option</option>
          <option value="Option 1">Nesciunt omnis</option>
          <option value="Option 2">Voluptas ducimus</option>
          <option value="Option 3">Qui inventore</option>
          <option value="Option 4">Sed corporis</option>
        </select>
      </div>
      <div>
        <label for="year">Year</label>
        <input
          type="input"
          name="year"
          placeholder="2000"
          onChange={changeYear}
        />
      </div>
      <div>
        <label for="page-count">Page Count</label>
        <input
          type="input"
          name="page-count"
          placeholder="0"
          onChange={changePageCount}
        />
      </div>
      <div>
        <label for="img-url">Image URL</label>
        <input
          type="input"
          name="img-url"
          placeholder="Image URL"
          onChange={changeImgUrl}
        />
      </div>
      <div>
        <textarea placeholder="Blurb" rows="4" cols="50" onChange={changeBlurb}>
          Blurb
        </textarea>
      </div>
      <div>
        <button className="submit-button">Add book</button>
      </div>
      <div className="errors">
        <p>{titleErrors}</p>
        <p>{authorErrors}</p>
        <p>{genreErrors}</p>
        <p>{yearErrors}</p>
        <p>{pageCountErrors}</p>
        <p>{imgUrlErrors}</p>
        <p>{blurbErrors}</p>
      </div>
    </form>
  );
}

export default AddBook;
