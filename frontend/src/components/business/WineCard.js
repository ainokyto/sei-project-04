import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = props => (
  <div className="main">
    <div className="card">
      <Link to={`/wines/${props.id}`}>
        <h4>{props.name}, {props.vintage}</h4>
        <h6>{props.colour}</h6>
        <figure>
          <img src={props.image} alt={props.name} />
        </figure>
      </Link>
    </div>
  </div>

)

export default WineCard