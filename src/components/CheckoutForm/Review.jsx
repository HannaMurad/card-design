import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ cart, getTotal }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {cart.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.Diamond.Name}>
          <ListItemText primary={product.Diamond.Name} secondary={`Quantity: ${product.Amount}`} />
          <Typography variant="body2">{(product.Amount * product.Diamond.Price)}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {getTotal()}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
