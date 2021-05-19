import React, {useState} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, Divider, CircularProgress, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';



const steps = ['Shipping Address','Payment Details']
const Checkout = ({cart, getTotal}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const test = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Confirmation = () => (
        <>
            <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: </Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    )
    
    const Form = () => activeStep === 0
        ? <AddressForm  test={test}/>
        : <PaymentForm nextStep={nextStep} backStep={backStep} shippingData={shippingData} cart={cart} getTotal={getTotal}/>

    return (
        <>
        <div className={classes.toolBar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(step => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}  
                    </Stepper>
                    { activeStep === steps.length ? <Confirmation/> : <Form/>}
                    
                </Paper>
            </main>
       
        </>
    )
}

export default Checkout
