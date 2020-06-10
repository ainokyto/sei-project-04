import React from 'react'
import { getAllReviews, getAllWines, createReview } from '../lib/api'
import ReviewCard from './ReviewCard'
import Select from 'react-select'

class Reviews extends React.Component {
  state = {
    reviews: [],
    wines: [],
    formData: {
      rating: null,
      content: null,
      wine: null
    }
  }

  async componentDidMount() {
    const res = await getAllReviews()
    const reviews = res.data
    const getWines = await getAllWines()
    const wines = getWines.data.map(wine => {
      return ({ value: wine.id, label: wine.name })
    })
    console.log(wines)
    this.setState({ reviews, wines })
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleMultiChange = selected => {
    const formData = { ...this.state.formData, wine: selected.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log('submitted')
    try {
      const res = await createReview(this.state.formData)
      console.log(res.data)
    } catch (err) {
      console.group(err.response)
    }

  }

  render() {
    const { reviews, formData, wines } = this.state
    console.log(reviews)
    console.log(formData)
    return (
      <main className="main">
        <section className="write-review">
          <h1>write a review</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="control">
              <input
                className="rating"
                name="rating"
                placeholder="rate from 1 to 5"
                onChange={this.handleChange}
                value={formData.rating} />
              <div className="control">
                <Select 
                options={wines}
                onChange={this.handleMultiChange}
                />
              </div>
              <div className="control">
                <textarea
                  className="textarea"
                  name="content"
                  placeholder="write your review"
                  onChange={this.handleChange}
                  value={formData.content}
                />
              </div>
            </div>
            <button type="submit">submit</button>
          </form>
        </section>
        <section className="review-sidebar">
          <h2>latest reviews</h2>

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