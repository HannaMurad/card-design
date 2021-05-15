import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import './Rings.css';
import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import Ring from './Ring';

import pro1 from './images/pro1.jpg'
import pro2 from './images/pro2.jpg'
import pro3 from './images/pro3.jpg'
import pro4 from './images/pro4.jpg'
import pro5 from './images/pro5.jpg'
import pro6 from './images/pro6.jpg'
import pro7 from './images/pro7.jpg'
import pro8 from './images/pro8.jpg'
import pro9 from './images/pro9.jpg'

export const ACTIONS = {
    All: 'all',
    ON_SALE: 'onsale',
    IN_STOCK: 'instock',
    SEARCH: 'search'
  }

function Rings({filter, search}) {

    
    const [rings, setRings] = useState([{ImageSrc:"holder.js/100px180", Name: "", Price: 0, Description:""}]);
    const [status, dispatch] = useReducer(reducer, true)

    useEffect(() => {
          console.log(search);
          dispatch({type:filter});
          
          //axios.get("http://localhost:6600/rings").then((response) => {
          //setRings(response.data);
          //});

        },[]);

    function reducer (status, action) {
        ///var selectedRings = [{ImageSrc:"holder.js/100px180", Name: "", Price: 0, Description:""}]
        switch (action.type) {
          case ACTIONS.All:
            console.log("allRings");
            axios.get("http://localhost:6600/rings").then((response) => {
              setRings(response.data);
            
            });
            return true;
            
          case ACTIONS.ON_SALE:
            console.log("onSale");
            axios.get("http://localhost:6600/rings", {params : {onSale: true}}).then((response) => {
              setRings(response.data);
            });
            return true;

            case ACTIONS.IN_STOCK:
            console.log("inStock");
            axios.get("http://localhost:6600/rings", {params : {inStock: true}}).then((response) => {
              setRings(response.data);
            });
            return true;

            case ACTIONS.SEARCH:
            console.log("search");
            axios.get("http://localhost:6600/rings", {params : {search: true, searchValue: search}}).then((response) => {
              setRings(response.data);
            });
            return true;

          default:
            return rings
          }
      }



    return (
        <>
            <Container fluid>
            <Row style={{justifyContent: 'center'}}>    
            {
                rings.map((variant, idx) => (
                    <Ring variant={variant} idx={idx} />
                ))
            } 
                </Row>  
            </Container>
        </>
    )
}

export default Rings


