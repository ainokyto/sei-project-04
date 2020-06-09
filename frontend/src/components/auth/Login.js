import React from 'react'
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

      this.props.history.push('/home') // redirecting user to Home
    } catch (err) {
      this.setState({ error: 'Invalid credentials' })
      console.log('response: ', err.response.data.errors)
    }
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
                <label >Email</label>
                <div>
                  <input
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div >
                <label >Password</label>
                <div >
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                  />
                </div>
                {error && < small>{error}</small>}
              </div>
              <div >
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login