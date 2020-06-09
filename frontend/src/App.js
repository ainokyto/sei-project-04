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
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ErrorPage from './components/common/ErrorPage'
import Footer from './components/common/Footer'

console.log('%cThis app was built by Aino Kytola, find me on github: github.com/ainokyto', 'color:blue;font-size:20px;font-weight:bold')

const App = () => (
  <BrowserRouter >
    <Hero />
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/people/wines/:id/reviews' component={Reviews} />
      <Route path='/people/wines/:id' component={WineShow} />
      <Route path='/people/wines' component={WineIndex} />
      <Route path='/people/:id' component={MakerShow} />
      <Route path='/people' component={MakersIndex} />
      <Route path='/about' component={About} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/*' component={ErrorPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
