import './book-page.css'
import placeholder from './placeholder.png'
import { useParams } from 'react-router-dom'


function BookPage() {

  const{id} = useParams
  
  return(

  <div className='container'>
    <div className='bookpage'>
      <div className='lef-col'>
        <img src={placeholder} width="300px"></img>
      </div>
      <div className='right-col'>
        <h1>TITLE</h1>
        <p>Author</p>
        <p>year</p>
        <p>page count</p>
        <p>genre</p>
        <p>blurb..... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nulla at augue sollicitudin auctor non sed sapien. Donec efficitur lobortis turpis, sit amet volutpat odio. Sed vehicula ac urna non pharetra.</p>
      </div>
    </div>
</div>
  )
}

export default BookPage;
