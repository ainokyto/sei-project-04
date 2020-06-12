import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Hero from './components/common/Hero'
import Navbar from './components/common/Navbar'
import MakerShow from './components/business/MakerShow'
import MakersIndex from './components/business/MakersIndex'
import Reviews from './components/business/Reviews'
import WineShow from './components/business/WineShow'
import About from './components/business/About'
import WineIndex from './components/business/WineIndex'
import Profile from './components/business/Profile'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ErrorPage from './components/common/ErrorPage'
import Footer from './components/common/Footer'
// import SecureRoute from './components/auth/SecureRoute'

console.log('%cThis app was built by Aino Kytölä, check out my github: github.com/ainokyto', 'color:pink;font-size:15px;font-weight:bold')

const App = () => (
  <BrowserRouter >
    <Navbar />
    <Hero />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/people/wines/:id' component={WineShow} />
      <Route path='/people/wines' component={WineIndex} />
      <Route path='/people/:id' component={MakerShow} />
      <Route path='/people' component={MakersIndex} />
      <Route path='/profile' component={Profile} />
      <Route path='/about' component={About} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/reviews' component={Reviews} />
      <Route path='/*' component={ErrorPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
