import React from 'react'
import { getAllReviews, getAllWines } from '../lib/api'
import ReviewCard from './ReviewCard'
import ReviewAuth from './ReviewAuth'
import ReviewForm from './ReviewForm'
import { isAuthenticated } from '../lib/auth'

class Reviews extends React.Component {
  state = {
    reviews: [],
    wines: []
  }

  async componentDidMount() {
    const res = await getAllReviews()
    const reviews = res.data.reverse()
    const getWines = await getAllWines()
    const wines = getWines.data.map(wine => {
      return ({ value: wine.id, label: wine.name })
    })
    console.log(wines)
    this.setState({ reviews, wines })
  }

  render() {
    const { reviews, wines } = this.state
    console.log(reviews)
    return (
      <div>
        {isAuthenticated() ?
        <>
          <h1>write a review</h1>
          <ReviewForm { ...wines } />
          <h2>latest reviews</h2>
              {reviews.map(review => (
            <div className="reviews" key={review.id}>
              <ReviewCard key={review.id} {...review} />
            </div>
          ))}
        </>
          :
        <ReviewAuth />
        }
      </div>
    )
  }
}



export default Reviews