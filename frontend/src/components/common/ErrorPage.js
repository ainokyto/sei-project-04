import React from 'react'
import { Link } from 'react-router-dom'

const blue = '#0147F9'
const black = '#232323'

class NotFound extends React.Component {

  handleMouseEnter = e => {
    e.target.style.color = blue
    e.target.style.cursor = 'pointer'
  }
  
  handleMouseLeave = e => {
    e.target.style.color = black
  }

  render() {
    return(
      <>
      <h1>
        page not found. back to 
        <span 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
          <Link to={`/people/wines`}> wines
          </Link>
          </span>
      </h1>
    </>
    )
  }

}

export default NotFound