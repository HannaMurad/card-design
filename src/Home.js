import React from 'react'

import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'

function Home() {
    return (
        <div>
           <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
            />
            <Carousel.Caption >
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
        </div>
    )
}

export default Home
