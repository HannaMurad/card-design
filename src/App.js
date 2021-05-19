import './App.css';
import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navigator from './components/Navigator';
import Home from './components/Home';
import Rings from './components/Rings';
import Checkout from './components/CheckoutForm/Checkout/Checkout';

import Cart from './components/Cart';

import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';



const CURRENCY_API = "https://api.exchangeratesapi.io/v1/latest";

function App() {

  const [cart, setCart] = useState([{Amount:0, Diamond : {Name: "", Price: 0, Description:""}}]);
  const [order, setOrder] = useState({});
  const [cartUpdate, setCartUpdate] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);

  const fetchRings = (passedParams) => {
    return axios.get("http://localhost:6600/rings", {params : {
      onSale: passedParams.onSale ?? false,
      instock: passedParams.inStock ?? false,
      search: passedParams.search ?? false,
      searchValue: passedParams.searchValue ?? ""
    }});
  }

  const cartApi = (url ="http://localhost:6600/shoppingcart") => {
        return{
            fetchAll : async () => await axios.get(url).then(res => setCart(res.data)),
              //promise().then((response) => {setCart(response.data)})
            add : async (ringId) => await axios.post(url, null, {params : {diamondId: ringId}}).then((response) => {setCartUpdate(prev => !prev)}),
            remove : async (ringId) => await axios.delete(url, {params : {diamondId: ringId}}).then((response) => {setCartUpdate(prev => !prev)})
        }
    }
  
  const getItemsCount =  () => cart.reduce((acc, curr) => acc + curr.Amount , 0);
  const getTotal =  () => cart.reduce((acc, curr) => acc + curr.Amount * curr.Diamond.Price, 0)

  const update = () => setCartUpdate(prev => !prev);
  /*const cartApi = (url ="http://localhost:6600/cart") => {
        return{
            fetchAll : () => axios.get(url),
            create : (newItem) => axios.post(url, newItem),
            update : (id, updatedItem) => axios.put(url + id, updatedItem),
            delete : (id) => axios.delete(url + id)
        }
    }*/

    useEffect(() => {
      cartApi().fetchAll();
    }, [cartUpdate]);

  return (
    <>
      <Navigator getItemsCount={getItemsCount}/>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/rings/:filter" >
            <Rings fetchRings={fetchRings} cartApi={cartApi}/>
          </Route>
          <Route exact path="/cart" > 
            <Cart cart={cart} cartApi={cartApi}/>
          </Route>
          <Route exact path="/checkout" > 
            <Checkout cart={cart} getTotal={getTotal}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
