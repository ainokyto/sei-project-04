import React from 'react'
import { getOneWinemaker } from '../lib/api'
import Winecard from './WineCard'
import { Link } from 'react-router-dom'

class MakerShow extends React.Component {
  state = {
    maker: null,
  }

  async componentDidMount() {
    try {
      const makerId = this.props.match.params.id
      const res = await getOneWinemaker(makerId)
      const maker = res.data
      this.setState({ maker })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    const { maker } = this.state
    if (!maker) return null
    console.log(maker)
    return (
      <div>
        <div className="maker-header">
          <div className="show-title">
            <h1>{maker.name}</h1>
          </div>
            <img className="maker-img" src={maker.image} alt={maker.name} />
        </div>

        <div className="show-title">
          <h3>{maker.owner}</h3>
          <h3>{maker.region}, {maker.country}</h3>
        </div>
        <div>

          {maker.wines.map(wine => (
            <Winecard key={wine.id} {...wine} />
          ))}

        </div>
        <Link to={`/people/wines`}>
          <h3 className="show-title" >back to
          <span onMouseEnter={(e) =>
              e.target.style.color = '#0147F9'}
              onMouseLeave={(e) =>
                e.target.style.color = '#232323'}
            > all wines</span>
          </h3>
        </Link>
      </div>

    )
  }
}

export default MakerShow