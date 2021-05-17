import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import {ImPlus} from 'react-icons/im'
import {ImMinus} from 'react-icons/im'

function Cart({cart, cartApi}) {

    useEffect(() => {
           //cartApi().fetchAll();
           console.log(cart);
        },[]);

    const addItem = async (ringId) => {
        await cartApi().add(ringId);  
    }

    const deleteItem = async (ringId) => {
        await cartApi().remove(ringId);
    }

    return (
        <div>
            <Table striped bordered hover >
            <thead>
                <tr>
                <th >Ring</th>
                <th >Price</th>
                <th >Amount</th>
                <th >Subtotal</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((variant, idx) => (
                    <tr key={idx} >
                    <td >{variant.Diamond.Name}</td>
                    <td >{variant.Diamond.Price}</td>
                    <td >{variant.Amount}</td>
                    <td >{Math.floor(variant.Diamond.Price * variant.Amount)}</td>
                    <td className="d-flex justify-content-end">
                        <Button className="m-1" variant="secondary" onClick={async () => {await addItem(variant.Diamond.DiamondId)}}><ImPlus /></Button>
                        <Button className="m-1" variant="secondary" onClick={async () => {await deleteItem(variant.Diamond.DiamondId)}}><ImMinus /></Button>
                    </td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </div>
    )
}

export default Cart
