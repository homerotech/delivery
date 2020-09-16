import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import Pedido from '../../catalogosEEmpresas/catalogo'

const produtos = Pedido.pago

console.log(produtos)
const products = [
  { name: 'Pedido 1', desc: 'Pizza', price: 'R$9.99' },
  { name: 'Pedido 2', desc: 'Vinho do porto', price: 'R$3.45' },
  { name: 'Pedido 3', desc: 'Chiclete', price: 'R$6.51' },
  { name: 'Pedido 4', desc: 'Churrasco', price: 'R$14.11' },
  { name: 'Frete', desc: '', price: 'Free' },
];
const addresses = ['Nome do Restaurante', 'Rio de janeiro', 'Rua', '99', 'BRASIL'];
const payments = [
  { name: 'Bandeira do Cartão', detail: 'Visa' },
  { name: 'Nome no cartão', detail: 'Mr John Smith' },
  { name: 'Número no cartão', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Data de expiração', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            R$34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Endereço
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );}