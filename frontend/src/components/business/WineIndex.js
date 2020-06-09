import React from 'react'
import { getAllWines } from '../lib/api'
import WineCard from './WineCard'

class WineIndex extends React.Component {
  state = {
    wines: []
  }

  async componentDidMount() {
    try {
      const res = await getAllWines()
      const wines = res.data
      this.setState({ wines })
      console.log(this.state.wines)
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    const { wines } = this.state
    if (!wines) return null
    // const { wines } = this.state
    // console.log(wines)
    return (
      <div>
        <h1>Wine Index</h1>
        {wines.map(wine => (
            <div key={wine.id}>
              <WineCard key={wine.id} {...wine} />
            </div>
          // <div>{item.name}</div>
        ))}
      </div>

    )
  }
}

export default WineIndex