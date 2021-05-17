import React from 'react'
import axios from 'axios'

import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';


function Ring({variant, idx, cartApi}) {

    const addItem = async (ringId) => (
        await cartApi().add(ringId)
    );

    return (
        <Card key={idx} style={{ width: '18rem'}}  className="m-3 card">
                    <Card.Img variant="top" src={variant.ImageSrc} />
                    <Card.Body>
                    
                    <Card.Title> 
                    <div class="d-flex justify-content-between">
                        <div className="p-2" >{variant.Name}</div>
                        <div className="p-2" >${variant.Price}</div>
                    </div>
                    </Card.Title>

                    <Card.Text>
                    {variant.Description}
                    </Card.Text>
                    <Button variant="primary" onClick={async () => await addItem(variant.DiamondId)}>Add to cart</Button>
                    </Card.Body>
        </Card>
    )
}

export default Ring
