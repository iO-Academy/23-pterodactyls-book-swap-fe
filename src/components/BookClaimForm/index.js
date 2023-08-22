import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./book-claim-form.css";

function BookClaimForm() {
  const [claimedBy, setClaimedBy] = useState("");

  const [name, setName] = useState("");
  // collect email even though it is not used yet
  const [email, setEmail] = useState("");

  const { id } = useParams("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handelEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://book-swap-api.dev.io-academy.uk/api/books/" + id, {
      method: "POST",

      // putting data into json
      body: JSON.stringify({
        data: {
          claimed: name,
        },
      }),
      mode: "cors",
      // Telling the API that we're sending JSON, and we want JSON back
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
        <div className="input" onChange={handelEmail}>
          <label className="label" htmlFor="user">
            Email
          </label>
          <input
            className="input"
            type="text"
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
