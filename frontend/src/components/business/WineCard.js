import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = props => (

  <div className="card-container">
    <div className="card">
      <Link to={`/people/wines/${props.id}`} >
        <div className="card-img-wrapper">
            <img src={props.image} alt={props.name} />
        </div>
        <div className="card-info">
          <h4>{props.name}, {props.vintage} | <span>{props.colour}</span></h4>
        </div>
      </Link>
    </div>
  </div>

)

export default WineCard