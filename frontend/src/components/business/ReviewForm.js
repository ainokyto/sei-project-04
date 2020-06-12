import React from 'react'
import Select from 'react-select'
import { createReview } from '../lib/api'

class ReviewForm extends React.Component {
  state = {
    formData: {
      rating: null,
      content: null,
      wine: null
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleMultiChange = selected => {
    const formData = { ...this.state.formData, wine: selected.value }
    this.setState({ formData })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submitted')
    try {
      const res = await createReview(this.state.formData)
      this.props.history.push('/reviews')
      console.log(res.data)
    } catch (err) {
      console.group(err.response)
    }
  }

  render() {
    console.log(this.props)
    const { formData } = this.state
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <div className="control">
              <Select className="selectbox"
                options={Object.values(this.props)}
                onChange={this.handleMultiChange}
              />
              <div>
              <label>rate from 1 to 5</label>
              </div>
              <select
                onChange={this.handleChange}
                value={formData.rating}
                className="rating"
                name="rating"
                placeholder="rating"
              >
                <option value="" selected> </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
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
      </div>
    )
  }
}

export default ReviewForm