import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logOut } from '../lib/auth'
import { toast } from '../lib/notifications'


class Navbar extends React.Component {
  state = { isOpen: false }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
    console.log(this.state.isOpen)
  }

  handleLogOut = () => {
    logOut() // call the function
    this.props.history.push('/') // redirect to home pge
    toast('You have been logged out.')
  }

  // whenever pathname changes the navbar closes
  componentDidUpdate(prevProps) { 
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <nav role="navigation" className="navbar">
        <div className="menuToggle">
          <input type={`${this.state.isOpen ? "checkbox" : "" }`} onClick={this.handleToggle} />
          <span></span>
          <span></span>
          <span></span>
            <ul className="menu">
              <Link to="/people"><li>People</li></Link>
              <Link to="/people/wines"><li>Wines</li></Link>
              <Link to="/about"><li>About</li></Link>
              {!isAuthenticated() && <Link to="/login"><li>Sign In</li></Link>}
              {!isAuthenticated() && <Link to="/register"><li>Register</li></Link>}
              {isAuthenticated() && <Link to="/reviews"><li>Reviews</li></Link>}
              {isAuthenticated() && <li onClick={this.handleLogOut}>Log Out</li>}
          </ul>
        </div>
      </nav>
    )
  }
}


export default withRouter(Navbar)

