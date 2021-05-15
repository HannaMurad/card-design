import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import {ImPlus} from 'react-icons/im'
import {ImMinus} from 'react-icons/im'

function Cart() {

    const cartApi = (url ="http://localhost:6600/shoppingcart") => {
        return{
            fetchAll : () => axios.get(url),
            add : async (ringId) => await axios.post(url, null, {params : {diamondId: ringId}}),
            remove : async (ringId) => await axios.delete(url, {params : {diamondId: ringId}})
        }
    }

    const [items, setItems] = useState([{Amount:0, Diamond : {Name: "", Price: 0, Description:""}}]);
    const [cartUpdate, setCartUpdate] = useState(true);
    
    
    useEffect(() => {
        console.log("entered use effect")
            cartApi().fetchAll().then((response) => {
                setItems(response.data);
                //console.log(response.data);
            });
        },[cartUpdate]);

    const addItem = async (ringId) => {
        await cartApi().add(ringId).then((response) => {setCartUpdate(prev => !prev)});  
    }

    const deleteItem = async (ringId) => {
        await cartApi().remove(ringId).then((response) => {setCartUpdate(prev => !prev)});
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
                {items.map((variant, idx) => (
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
