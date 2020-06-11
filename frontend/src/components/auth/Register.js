import React from 'react'
import { registerUser, loginUser } from '../lib/api'
import { Link } from 'react-router-dom'
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
      username = 'name is required'
    }
    if (errors.email && errors.email.kind === 'required') {
      email = 'email is required'
    }
    if (errors.email && errors.email.kind === 'unique') {
      email = 'account already exists'
    }
    if (errors.password) {
      password = 'password is required'
    }
    if (errors.password_confirmation){
      password_confirmation = 'passwords do not match'
    }
    this.setState({ errors: { username, email, password, password_confirmation }})
  }

  render() {
    const { formData, errors } = this.state
    console.log(this.state)
    return (
      <section>
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1>sign up</h1><br />
              <div>
                <div>
                  <input
                    className={`input ${errors.username ? 'form-error' : ''}`}
                    placeholder="username"
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
                    className={`input ${errors.email ? 'form-error' : ''}`}
                    placeholder="email"
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
                    className={`input ${errors.bio ? 'form-error' : ''}`}
                    placeholder="bio"
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
                    className={`input ${errors.profile_image ? 'form-error' : ''}`}
                    placeholder="profile image URL"
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
                    className={`input ${errors.password ? 'form-error' : ''}`}
                    type="password"
                    placeholder="password"
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
                    className={`input ${errors.password_confirmation ? 'form-error' : ''}`}
                    type="password"
                    placeholder="password confirmation"
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
              <h3>already have an account?
                <Link to={'/login'}>
                  <span onMouseEnter={(e) =>
                    e.target.style.color = '#0147F9'}
                    onMouseLeave={(e) =>
                      e.target.style.color = '#232323'}
                  > sign in here</span>
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
