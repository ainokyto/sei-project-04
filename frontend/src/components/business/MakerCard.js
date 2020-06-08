import React from 'react'
import { Link } from 'react-router-dom'

const MakerCard = ({ id, name, region, country, image }) => (

  <div className="main">
    <div className="card">
      <Link to={`/people/${id}/`}>
        <h4>{name}</h4>
        <h6>{region}, {country}</h6>
      </Link>
    </div>
  </div>

)

export default MakerCard