import React, {useRef, useEffect } from 'react'
import { Typography, Button, Divider } from '@material-ui/core';

import Review from './Review';

const PaymentForm = ({nextStep, backStep, shippingData, cart, getTotal}) => {
    const paypal = useRef()
    useEffect(() => {
        window.paypal
        .Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "diamond rings",
                            amount:  {
                                currency_code: "SEK",
                                value: getTotal(),
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.caputre();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
        
    }, [])
    return (
        <>
            <Review cart={cart} getTotal={getTotal}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <div ref={paypal}/>
        </>
    )
}

export default PaymentForm
