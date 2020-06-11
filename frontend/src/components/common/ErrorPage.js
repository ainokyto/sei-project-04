import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>
        page not found.
          <Link to={`/people/wines`}>
          <span onMouseEnter={(e) =>
            e.target.style.color = '#0147F9'}
            onMouseLeave={(e) =>
            e.target.style.color = '#232323'} > back to wines </span>
        </Link>
      </h1>
    </>
  )
}

export default NotFound