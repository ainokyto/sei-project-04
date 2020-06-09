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
      <div className="main">
        <h1>{maker.name}</h1>
        <h3>{maker.owner}</h3>
        <div>
          {maker.region}, {maker.country}
        </div>
        <div>Wines:

          {maker.wines.map(wine => (
            <Winecard key={wine.id} {...wine} />
          ))}

        </div>Back to
        <Link to={`/people/wines`}> All Wines</Link>
      </div>

    )
  }
}

export default MakerShow