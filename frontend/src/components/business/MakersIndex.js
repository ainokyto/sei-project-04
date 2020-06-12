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
      <>
        <h1 className="index-h1">all producers</h1>
        <div className="index">
          {makers.map(maker => (
            <MakerCard key={maker.id} {...maker} />
          ))}
        </div>
      </>
    )
  }
}

export default MakersIndex
