import React from 'react'
import Notifications, { notify } from 'react-notify-toast'
import { getCurrentUser, deleteReview, editReview } from '../lib/api'
import ReviewCard from './ReviewCard'

const toastColor = { background: '#232323', text: '#fedfe2' }

class Profile extends React.Component {
  state = {
    reviews: [],
    // formData //!
    isDeleted: false
  }

  async componentDidMount() {
    const res = await getCurrentUser()
    // console.log(res.data)
    const reviews = res.data.reviews.reverse()
    console.log(reviews)
    this.setState({ reviews, isDeleted: false })
  }

  handleDelete = async event => {
    try {
      const reviewId = event.target.value
      await deleteReview(reviewId)
      // this.props.history.push('/profile')
      this.setState({ isDeleted: true })
      notify.show('review deleted', 'custom', 4000, toastColor)
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  handleEdit = async event => {
    try {
      event.preventDefault()
      const reviewId = event.target.value
      // await editReview(reviewId, this.state.formData) //!
      this.history.push(`/profile`)
      notify.show('review edited', 'custom', 4000, toastColor)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { reviews } = this.state
    if (!reviews) return null
    return (
      <div>
      <Notifications />
        {reviews.map(review => (
          <div className="reviews" key={review.id}>
            <ReviewCard 
            key={review.id} 
            { ...review }
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default Profile