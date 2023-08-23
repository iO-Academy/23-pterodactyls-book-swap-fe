import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./book-claim-form.css";

function BookClaimForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://book-swap-api.dev.io-academy.uk/api/books/claim/" + id, {
      method: "PUT",

      // putting data into json
      body: JSON.stringify({
        "email": email,
        "name": name,
      }),
      mode: "cors",
      // Telling the API that we're sending JSON, and we want JSON back
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});

    props.setClaimedBy(name);
  }

  return (
    <div>
      <form className="claim-form" onSubmit={handleSubmit}>
        <p className="heading">want to claim this book?</p>
        <div className="input">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Name"
            onChange={handleName}
          ></input>
        </div>
        <div className="input" onChange={handleEmail}>
          <label className="label" htmlFor="user">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Email"
          ></input>
        </div>
        <input className="claim-button" type="submit" value="Claim"></input>
      </form>
    </div>
  );
}

export default BookClaimForm;
