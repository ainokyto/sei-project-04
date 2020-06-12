import React from 'react'
import { Link } from 'react-router-dom'

const MakerCard = ({ id, name, region, country, image }) => (

  <div className="card-container">
    <div className="card">
      <Link to={`/people/${id}/`}>
        <div className="card-img-wrapper">
          <img src={image} alt={name} />
        </div>
        <div className="card-info">
          <h3>{name}</h3>
          <h5>{region}, {country}</h5>
        </div>
      </Link>
    </div>
  </div>

)

export default MakerCard