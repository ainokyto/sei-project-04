import React from 'react'
import { getAllReviews } from '../lib/api'
import ReviewCard from './ReviewCard'

class Reviews extends React.Component {
  state = {
    reviews: []
  }

  async componentDidMount() {
    const res = await getAllReviews()
    const reviews = res.data
    this.setState({ reviews })
  }

  render() {
    const { reviews } = this.state
    console.log(reviews)
    return (
      <main className="main">
        <section className="write-review">
          <h2>Write a Review</h2>
        </section>
        <section className="review-sidebar">

          {reviews.map(review => (
        <div key={review.id}>
          <ReviewCard key={review.id} {...review} />
        </div>
        
    ))} 
          
        
        </section>
      </main>
    )
  }
}



export default Reviews