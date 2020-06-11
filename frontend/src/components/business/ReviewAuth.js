import React from 'react' 
import { Link } from 'react-router-dom'

const ReviewAuth = () => {
  return (
    <div>
      <h1>
        you must be
      <Link to={'/login'}>
          <span
            onMouseEnter={(e) =>
              e.target.style.color = '#0147F9'}
            onMouseLeave={(e) =>
              e.target.style.color = '#232323'} > signed in </span>
        </Link>
  to add and read reviews.</h1>
    </div>
  )
}


export default ReviewAuth