import React from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: '' })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token) // sending token to local storage
      this.props.history.push('/people/wines') // redirecting user to Home
    } catch (err) {
      this.setState({ error: 'invalid credentials' })
      console.log('response: ', err.response.data.errors)
    }
  }

  // redirecting user back to where they logged in... working on it
componentDidUpdate = prevProps => {
  console.log(prevProps.history.location)
}

  render() {
    const { formData, error } = this.state
    console.log(this.state)
    return (
      <section >
        <div >
          <div >
            <form onSubmit={this.handleSubmit}>
              <div>
                <label >email</label>
                <div>
                  <input
                    placeholder="email"
                    name="email"
                    onChange={this.handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div >
                <label >password</label>
                <div >
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                  />
                </div>
                {error && < small>{error}</small>}
              </div>
              <div >
                <button type="submit">login</button>
              </div>
              <h3>not a member?
                <Link to={'/register'}>
                  <span onMouseEnter={(e) =>
                    e.target.style.color = '#0147F9'}
                    onMouseLeave={(e) =>
                      e.target.style.color = '#232323'}
                  > register here</span>
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login