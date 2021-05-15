import './App.css';
import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import React, { useState } from 'react'
import Axios from 'axios'

import Navigator from './Navigator';
import Home from './Home';
import Rings from './Rings';
import AllRings from './AllRings';
import OnSale from './OnSale';
import InsStock from './InStock';
import Cart from './Cart';

import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import Ring from './Ring';
import InStock from './InStock';
import Search from './Search';

const CURRENCY_API = "https://api.exchangeratesapi.io/v1/latest";

function App() {

  const cartApi = (url ="http://localhost:6600/cart") => {
        return{
            fetchAll : () => Axios.get(url),
            create : (newItem) => Axios.post(url, newItem),
            update : (id, updatedItem) => Axios.put(url + id, updatedItem),
            delete : (id) => Axios.delete(url + id)
        }
    }

  const getItems = () => {cartApi().fetchAll()}
  const addItem = newItem => {cartApi().create(newItem)}

  return (
    <>
      <Navigator/>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/rings" >
            <AllRings/>
          </Route>
          <Route exact path="/onsale" >
            <OnSale/>
          </Route>
          <Route exact path="/instock" >
            <InStock/>
          </Route>
          <Route exact path="/search" >
            <Search/>
          </Route>
          <Route exact path="/cart" > 
            <Cart/>
          </Route>
        </Switch>n
      </Router>
    </>
  );
}

export default App;
