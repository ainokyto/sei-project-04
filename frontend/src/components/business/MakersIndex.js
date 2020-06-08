import React from 'react'
import { getAllWinemakers } from '../lib/api'
import MakerCard from './MakerCard'

class MakersIndex extends React.Component {
  state = {
    makers: []
  }

  async componentDidMount() {
    try {
      const res = await getAllWinemakers()
      // console.log(res.data)
      const makers = res.data
      this.setState({ makers })
      console.log(this.state)
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {

    if (!this.state.makers) return null
    const { makers } = this.state
    console.log(makers)

    return (
      <div className="main">
        <div className="column">
          <div className="card-wrapper">

            {makers.map(maker => (
                <MakerCard key={maker.id} {...maker} />
            ))}

          </div>
        </div>
      </div>
    )
  }
}

export default MakersIndex
