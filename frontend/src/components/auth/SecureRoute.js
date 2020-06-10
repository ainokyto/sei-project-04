import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated, logOut } from '../lib/auth'

const SecureRoute = ({ component: Component, ...rest }) => {
  if (isAuthenticated()) return <Route {...rest} component={Component} />
  logOut()
  return <Redirect to="/" />
}

export default SecureRoute
