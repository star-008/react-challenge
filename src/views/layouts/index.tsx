import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import About from '../components/About'
import Account from '../components/Account'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Pricing from '../components/Pricing'
import Product from '../components/Product'
import Header from './Header'

function Layout() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'} render={() => <Redirect to="/pricing" />} />
        <Route path={'/home'} component={Home} />
        <Route path={'/product'} component={Product} />
        <Route path={'/about'} component={About} />
        <Route path={'/pricing'} component={Pricing} />
        <Route path={'/blog'} component={Blog} />
        <Route path={'/contact'} component={Contact} />
        <Route path={'/account'} component={Account} />
      </Switch>
    </>
  )
}

export default Layout
