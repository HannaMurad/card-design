import React,{useState, useEffect} from 'react'
import { Badge, Button, Card, CardColumns, CardDeck, CardGroup, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import logo from '../images/logo.png'
import logoFooter from '../images/logo_footer.png'

import {FaShoppingCart} from 'react-icons/fa'
import {GiBigDiamondRing} from 'react-icons/gi'

function Navigator({getItemsCount}) {

    const [search, setSearch] = useState("");
    
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="/">
                <GiBigDiamondRing size="45"/>LOXURY
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-between">
                <Nav className="mr-auto">
                    {/*<Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Rings">Rings</Nav.Link>*/}
                    <NavDropdown title="Rings" id="basic-nav-dropdown">
                    {/*<NavDropdown.Item href="#seasonal">Seasonal</NavDropdown.Item>*/}
                    <NavDropdown.Item href="/rings/onsale">On Sale</NavDropdown.Item>
                    <NavDropdown.Item href="/rings/instock">In Stock</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/rings/allrings">All Rings</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/cart"><Badge><FaShoppingCart size="20"/>{" " + getItemsCount()}</Badge></Nav.Link>
                </Nav>
                <Form  inline  action="/search" className="d-flex justify-content-between">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                    <Button href={"/rings/search?n=" + search.toString()} variant="outline-success" >Search</Button>
                </Form>
                
                </Navbar.Collapse>
                
            </Navbar>
            
        </>
    )
}

export default Navigator
