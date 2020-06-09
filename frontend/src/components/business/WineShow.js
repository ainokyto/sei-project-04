import React from 'react'
import { getOneWine } from '../lib/api'
import { Link } from 'react-router-dom'

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
      <section>
        <div>
          <h1>{wine.name}</h1>
          <Link to={`/people/${wine.producer.id}`}>
            <h2>{wine.producer.name}</h2>
          </Link>
          <hr />
          <p>{wine.description}</p>
          <figure className="image image is-1by1">
            <img src={wine.image} alt={wine.name} />
          </figure>
          <Link to={`/people/${wine.producer.id}`}>
            <h3>{wine.producer.name}</h3>
          </Link>
        </div>
      </section>
    )
  }
}

export default WineShow
