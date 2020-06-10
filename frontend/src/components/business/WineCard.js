import React from 'react'
import { Link } from 'react-router-dom'



const WineCard = props => (

  <div className="winecard-container">
    <div className="wine-card">
      <Link to={`/people/wines/${props.id}`} >
        <div className="wine-img-wrapper">
          <figure>
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="wine-card-info">
          <h4>{props.name}, {props.vintage} | <span>{props.colour}</span></h4>
        </div>
      </Link>
    </div>
  </div>

)

export default WineCard