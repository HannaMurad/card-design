import React, { useEffect, useState, useReducer } from 'react'
import {useParams, useLocation} from 'react-router-dom'
import './Rings.css';
import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import Ring from './Ring';

export const ACTIONS = {
    All: 'allrings',
    ON_SALE: 'onsale',
    IN_STOCK: 'instock',
    SEARCH: 'search'
  }

function Rings({search, fetchRings, cartApi}) {
    const {filter} = useParams();
    let location = useLocation();
    
    const [rings, setRings] = useState([{ImageSrc:"holder.js/100px180", Name: "", Price: 0, Description:""}]);
    const [status, dispatch] = useReducer(reducer, true)

    useEffect(() => {
          console.log(filter);
          const params = new URLSearchParams(location.search) ;
          const n = params.get("n");
          
          dispatch({type:filter, payload: {search:n}});

        },[]);

    function reducer (status, action) {
        ///var selectedRings = [{ImageSrc:"holder.js/100px180", Name: "", Price: 0, Description:""}]
        switch (action.type) {
          case ACTIONS.All:
            console.log("allRings");
            fetchRings({}).then((response) => {
              setRings(response.data);
            });
            return true;
            
          case ACTIONS.ON_SALE:
            console.log("onSale");
            fetchRings({onSale:true}).then((response) => {
              setRings(response.data);
            });
            return true;

            case ACTIONS.IN_STOCK:
            console.log("inStock");
            fetchRings({inStock:true}).then((response) => {
              setRings(response.data);
            });
            return true;

            case ACTIONS.SEARCH:
            console.log("search");
            fetchRings({search: true, searchValue: action.payload.search}).then((response) => {
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
                    <Ring variant={variant} idx={idx} cartApi={cartApi}/>
                ))
            } 
            </Row>  
            
            </Container>
        </>
    )
}

export default Rings


