import React from 'react'
import { getOneWine } from '../lib/api'
import { isAuthenticated } from '../lib/auth'
import { Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import ReviewAuth from './ReviewAuth'

class WineShow extends React.Component {
  state = {
    wine: ''
  }

  async componentDidMount() {
    const wineId = this.props.match.params.id
    const res = await getOneWine(wineId)
    const wine = res.data
    console.log(wine)
    this.setState({ wine })
  }

  render() {
    const { wine } = this.state
    if (!wine) return null
    console.log(wine)
    return (
      <main>
        <div className="show-title">
          <h1>{wine.name}</h1>
          <Link to={`/people/${wine.producer.id}`}>
            <h2 onMouseEnter={(e) =>
              e.target.style.color = '#0147F9'}
              onMouseLeave={(e) =>
                e.target.style.color = '#232323'} >
              {wine.producer.name}
            </h2>
          </Link>
        </div>
        <hr />
        <div>
          <section className="show-info-container">
            <div className="img-wrapper">
                <img src={wine.image} alt={wine.name} />
            </div>
            <div className="show-info">
              <h4>country: </h4><p> {wine.producer.country}</p>
              <h4>region: </h4><p> {wine.producer.region}</p>
              <h4>grapes: </h4><p> {wine.grape_varieties}</p>
              
            <p>{wine.description}</p>
            {isAuthenticated() ? 
                <Link to={`/reviews`}>
                <button>review this wine</button>
                </Link>
              : <ReviewAuth /> }
            </div>
          </section>
          <Link to={`/people/${wine.producer.id}`}>
            <h3 className="show-title"
              onMouseEnter={(e) =>
                e.target.style.color = '#0147F9'}
              onMouseLeave={(e) =>
                e.target.style.color = '#232323'} >
              {wine.producer.name}
            </h3>
          </Link>
        </div>

      </main>
    )
  }
}

export default WineShow
