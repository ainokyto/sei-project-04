import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>home</h1>

        <Link to={`/people`}>
          <h3 className="show-title">
          <span onMouseEnter={(e) =>
              e.target.style.color = '#0147F9'}
              onMouseLeave={(e) =>
                e.target.style.color = '#232323'}
            >go to producers</span>
          </h3>
        </Link>

        <Link to={`//people/wines`}>
          <h3 className="show-title">
          <span onMouseEnter={(e) =>
              e.target.style.color = '#0147F9'}
              onMouseLeave={(e) =>
                e.target.style.color = '#232323'}
            >go to wines</span>
          </h3>
        </Link>

        <Link to={`/about`}>
          <h3 className="show-title">
          <span onMouseEnter={(e) =>
              e.target.style.color = '#0147F9'}
              onMouseLeave={(e) =>
                e.target.style.color = '#232323'}
            > what is wino?</span>
          </h3>
        </Link>

      </div>
    )
  }
}

export default Home