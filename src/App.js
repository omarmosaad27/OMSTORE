import './App.css';

import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductsList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'
export default class App extends Component {
  render() {
    return (
      <>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal/>
      </>
    )
  }
}
