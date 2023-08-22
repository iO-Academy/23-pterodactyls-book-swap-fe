import './book-claim-form.css'

function BookClaimForm() {
  return (

<div>
  <form className='claim-form'>
    <p className='heading'>want to claim this book?</p>
    <div className='input'>
    <label className="label"  htmlFor="name">Name</label>
    <input className='input' type="text" id='name' placeholder='Name'></input>
    </div>
    <div className='input'>
    <label className="label" htmlFor="user">Email</label>
    <input className='input' type="text" id="email" placeholder='Email'></input>
    </div>
    <input className="claim-button" type="submit" value="Claim"></input>
  </form>
</div>
  );
}

export default BookClaimForm;
