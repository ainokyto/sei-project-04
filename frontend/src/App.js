import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import MakersIndex from './components/business/MakersIndex'
import MakerShow from './components/business/MakerShow'
import About from './components/business/About'
import WineIndex from './components/business/WineIndex'
import WineShow from './components/business/WineShow'
import Reviews from './components/business/Reviews'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ErrorPage from './components/common/ErrorPage'

console.log('%cThis app was built by Aino Kytola. Check out my work on github: github.com/ainokyto', 'color:blue;font-size:20px;font-weight:bold')

const App = () => (
  <BrowserRouter >
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/people' component={MakersIndex} />
      <Route path='/people/:id' component={MakerShow} />
      <Route path='/wines' component={WineIndex} />
      <Route path='/wines/about' component={About} />
      <Route path='/wines/:id' component={WineShow} />
      <Route path='/wines/:id/reviews' component={Reviews} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/*' component={ErrorPage} />
    </Switch>
  </BrowserRouter>
)

export default App
