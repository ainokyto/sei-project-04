import React from 'react'

const ReviewCard = props => (

  <div className="main">
    <div className="card">
        <h4>{props.owner.username}</h4>
        <h4>{props.rating}</h4>
<p>{props.content}</p>
    </div>
  </div>

)

export default ReviewCard