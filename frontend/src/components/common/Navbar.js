import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logOut } from '../lib/auth'
import { toast } from '../lib/notifications'


class Navbar extends React.Component {
  state = { isOpen: false }

  handleLogOut = () => {
    logOut() // call the function
    this.props.history.push('/') // redirect to home pge
    toast('You have been logged out.')
  }

  // whenever pathname changes the navbar closes
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log(this.props.location.pathname)
      console.log(prevProps.location.pathname)
      this.setState({ isOpen: true })
    }
  }

  render() {
    return (
      <nav role="navigation" className="navbar">
        <div className="menuToggle" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
            <Link to="/people"><li>people</li></Link>
            <Link to="/people/wines"><li>wines</li></Link>
            <Link to="/about"><li>about</li></Link>
            {!isAuthenticated() && <Link to="/login"><li>sign in</li></Link>}
            {!isAuthenticated() && <Link to="/register"><li>register</li></Link>}
            {isAuthenticated() && <Link to="/reviews"><li>reviews</li></Link>}
            {isAuthenticated() && <li onClick={this.handleLogOut}>log out</li>}
          </ul>
        </div>
      </nav>
    )
  }
}


export default withRouter(Navbar)

