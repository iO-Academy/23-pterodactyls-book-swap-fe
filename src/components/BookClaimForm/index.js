import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookClaimForm() {
  const [claimedBy, setClaimedBy] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams("");

  useEffect(() => {
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
    });
  }, []); // put the button event inside here

  return <></>;
}

export default BookClaimForm;
