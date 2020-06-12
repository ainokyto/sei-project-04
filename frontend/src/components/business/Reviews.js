import React from 'react'
import Notifications, { notify } from 'react-notify-toast'
import { getAllReviews, getAllWines, deleteReview } from '../lib/api'
import ReviewCard from './ReviewCard'
import ReviewAuth from './ReviewAuth'
import ReviewForm from './ReviewForm'
import { isAuthenticated } from '../lib/auth'

const toastColor = { background: '#232323', text: '#fedfe2' }

class Reviews extends React.Component {
  state = {
    reviews: [],
    wines: []
  }

  async componentDidMount() {
    try {
      this.loadData()
    } catch (err) {
      console.log(err)
    }
  }

  loadData = async () => {
    try {
      const res = await getAllReviews()
      const reviews = res.data.reverse()
      const getWines = await getAllWines()
      const wines = getWines.data.map(wine => {
        return ({ value: wine.id, label: wine.name })
      })
      console.log(wines)
      this.setState({ reviews, wines })
    } catch (err) {
      console.log(err)
    }

  }

  handleDelete = async event => {
    try {
      const reviewId = event.target.value
      await deleteReview(reviewId)
      this.props.history.push('/reviews')
      notify.show('review deleted', 'custom', 4000, toastColor)
      this.loadData()
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  // handleEdit = async event => {
  //   try {
  //     event.preventDefault()
  //     const reviewId = event.target.value
  //     // await editReview(reviewId, this.state.formData) //!
  //     this.history.push(`/profile`)
  //     notify.show('review edited', 'custom', 4000, toastColor)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    const { reviews, wines } = this.state
    console.log(reviews)
    return (
      <div className="reviews-main">
        {isAuthenticated() ?
          <>
            <Notifications />
            <div className="reviews-form">
              <h1 className="reviews-title">write a review</h1>
              <ReviewForm {...wines} />
            </div>
              <h2 className="reviews-title">latest reviews</h2>
            <div className="reviews-latest">
              {reviews.map(review => (
                <div key={review.id}>
                  <ReviewCard
                    key={review.id}
                    {...review}
                    handleDelete={this.handleDelete}
                  // handleEdit={this.handleEdit}
                  />
                </div>

              ))}
            </div>
          </>
          :
          <ReviewAuth />
        }
      </div>

    )
  }
}



export default Reviews