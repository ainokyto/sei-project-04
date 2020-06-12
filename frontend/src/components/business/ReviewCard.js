import React from 'react'
import { isOwner } from '../lib/auth'

const ReviewCard = props => (

  <div className="card-container">
    <div className="card">
      <h4>{props.rating}, {props.wine.name}</h4>
      <h4>{props.owner.username} </h4>
      <img className="review-img" src={props.wine.image} alt={props.wine.name} />
      <p>{props.content}</p>
      {isOwner(props.owner.id) && <button value={props.id} onClick={props.handleEdit}>edit</button>}
      {isOwner(props.owner.id) && <button value={props.id} onClick={props.handleDelete}>delete</button>}
    </div>
  </div>
)

export default ReviewCard