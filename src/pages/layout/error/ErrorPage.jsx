import React from 'react'
import './error.scss';
import sadEmoji from '../../../img/error.jpg';
import { Link } from 'react-router-dom'


function ErrorPage() {
  return (

    // i am in eoor page 
    <div className='error'>
    <div className="Error-img">
        <img src={sadEmoji} alt="emoji" height={"170px"} />
      </div>

      <div className="error-container">
        <h1>Oops! Something went wrong</h1>
        <p>We're sorry, but it seems like there was an error.</p>
      </div>

      <Link to="/">
      <div className="Error-btn">
          <button className='E-btn'> RETURN HOME </button>
      </div>
      </Link>
</div>
  )
}

export default ErrorPage