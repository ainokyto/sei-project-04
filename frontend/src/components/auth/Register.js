import React from 'react'
import { registerUser, loginUser } from '../lib/api'
import { Redirect } from 'react-router-dom'
import { setToken } from '../lib/auth'


class Register extends React.Component {
  state = {
    formData: {
      username: '',
      profile_image: '',
      email: '',
      bio: '',
      password: '',
      password_confirmation: ''
    },
    redirect: false,

    errors: {
      username: '',
      profile_image: '',
      email: '',
      bio: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = event => {
    console.log('change event: ', event.target.name)
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      this.props.history.push('/login')
      if (response.status === 201) { // If registration goes well, log the user in by running the login user function with the formData, set token and redirect to profile page
        const loginResponse = await loginUser(this.state.formData)
        setToken(loginResponse.data.token)
        this.setState({ redirect: true })
      }

      if (response.status === 422) throw new Error()

    } catch (err) {
      console.log('response: ', err.response.data.errors)
      this.handleErrors(err.response.data.errors) // passing the errors array from the 422 response to handleErrors function as args
    }
  }

  handleErrors = (errors) => {
    let username = ''
    let email = ''
    let password = ''
    let password_confirmation = ''

    if (errors.username) {
      username = 'Name is required'
    }
    if (errors.email && errors.email.kind === 'required') {
      email = 'Email is required'
    }
    if (errors.email && errors.email.kind === 'unique') {
      email = 'Account already exists'
    }
    if (errors.password) {
      password = 'Password is required'
    }
    if (errors.password_confirmation){
      password_confirmation = 'Passwords do not match'
    }
    this.setState({ errors: { username, email, password, password_confirmation }})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />
    }
  }

  sendData = () => {
    this.props.switchForm(false)
  }

  render() {
    const { formData, errors } = this.state
    console.log(this.state)
    return (
      <section>
      {this.renderRedirect()}
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1>Sign Up</h1><br />
              <div>
                <div>
                  <input
                    className={`input ${errors.username ? 'is-danger' : ''}`}
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                    value={formData.username}
                  />
                </div>
                {/* {errors.name ? <small>{errors.name}</small> : ''} */}
              </div>
              <div>
                <div>
                  <input
                    className={`input ${errors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={formData.email}
                  />
                </div>
                {/* {errors.email ? <small>{errors.email}</small> : ''} */}
              </div>
              <div>
                <div>
                  <input
                    className={`input ${errors.bio ? 'is-danger' : ''}`}
                    placeholder="Bio"
                    name="bio"
                    onChange={this.handleChange}
                    value={formData.bio}
                  />
                </div>
                {/* {errors.email ? <small>{errors.email}</small> : ''} */}
              </div>
              <div>
                <div>
                  <input
                    className={`input ${errors.profile_image ? 'is-danger' : ''}`}
                    placeholder="Image URL"
                    name="profile_image"
                    onChange={this.handleChange}
                    value={formData.profile_image}
                  />
                </div>
                {/* {errors.email ? <small>{errors.email}</small> : ''} */}
              </div>
              <div>
                <div>
                  <input
                    className={`input ${errors.password ? 'is-danger' : ''}`}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                  />
                </div>
                {/* {errors.password && <small>{errors.password}</small>} */}
              </div>
              <div>
                <div>
                  <input
                    className={`input ${errors.password_confirmation ? 'is-danger' : ''}`}
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    onChange={this.handleChange}
                    value={formData.password_confirmation}
                  />
                </div>
                {/* {errors.password_confirmation && <small>{errors.password_confirmation}</small>} */}
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
              <div>
                <button onClick={this.sendData} type="button">Have an account? Sign in here</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
