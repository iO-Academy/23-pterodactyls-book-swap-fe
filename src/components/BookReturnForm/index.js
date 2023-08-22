import { useState } from "react";
import "./bookreturn.css";
import { useParams } from "react-router-dom";

function BookReturnForm() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://book-swap-api.dev.io-academy.uk/api/books/return/" + id, {
      method: "PUT",

      // putting data into json
      body: JSON.stringify({
        "email": email,
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
        console.log(data);
      });
  }

  return (
    <form className="return-form" onSubmit={handleSubmit}>
      <p className="heading">want to return this book?</p>
      <div className="input">
        <label className="label" htmlFor="user">
          Email
        </label>
        <input
          className="input"
          type="text"
          id="email"
          placeholder="Email"
          onChange={handleEmail}
        ></input>
      </div>

      <div>
        <p className="error">{errorMsg}</p>
      </div>
      <input className="return-button" type="submit" value="Return"></input>
    </form>
  );
}

export default BookReturnForm;
