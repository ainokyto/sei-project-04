import React from 'react'
import { getAllWinemakers } from '../lib/api'
import WineCard from './WineCard'

class WineIndex extends React.Component {
  state = {
    wines: []
  }

  async componentDidMount() {
    try {
      const res = await getAllWinemakers()
      // console.log(res.data)
      const makers = res.data
      const wines = makers.map(maker => (
        maker.wines
      ))
      this.setState({ wines })
      console.log(this.state.wines)
      this.Foo()
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  Foo = () => {
    const foo = this.state.wines.map(wine => (
      wine.map(item => (
        item.name
      ))
    ))
    console.log(foo)
  }


  render() {
    if (!this.state.wines) return null
    // const { wines } = this.state
    // console.log(wines)
    return (
      <div>
        {this.state.wines.map(wine => (
          wine.map(item => (
            <div>
              <WineCard key={item.id} {...item} />
            </div>
          // <div>{item.name}</div>
          ))
        ))}
      </div>

    )
  }
}

export default WineIndex