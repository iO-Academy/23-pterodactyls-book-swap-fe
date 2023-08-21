import './book-claim-form.css'

function BookClaimForm() {
  return (

<div>
  <form className='claim-form'>
    <p>want to claim this book?</p>
    <div className='input'>
    <labe htmlFor="name">Name</labe>
    <input type="text" id='name'></input>
    </div>
    <div className='input'>
    <labe htmlFor="user">Email</labe>
    <input type="text" id="email"></input>
    </div>
    <input type="submit" value="Claim"></input>
  </form>
</div>
  );
}

export default BookClaimForm;
