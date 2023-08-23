import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [blurb, setBlurb] = useState("");

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="title">Title (required)</label>
        <input type="input" name="title" placeholder="Title" />
      </div>
      <div>
        <label for="author">Author (required)</label>
        <input type="input" name="author" placeholder="Author" />
      </div>
      <div>
        <label for="genre">Genre (required)</label>
        <input type="input" name="genre" placeholder="None selected" />
      </div>
      <div>
        <label for="year">Year</label>
        <input type="input" name="year" placeholder="2000" />
      </div>
      <div>
        <label for="page-count">Page Count</label>
        <input type="input" name="page-count" placeholder="0" />
      </div>
      <div>
        <label for="img-url">Image URL</label>
        <input type="input" name="img-url" placeholder="Image URL" />
      </div>
      <div>
        <textarea placeholder="Blurb" rows="4" cols="50">
          Blurb
        </textarea>
      </div>
    </form>
  );
}

export default AddBook;
