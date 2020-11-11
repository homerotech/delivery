import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Mercadopago from 'mercadopago'
export default function PaymentForm() {
  window.Mercadopago.getIdentificationTypes();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pagamento
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="email1"
            label="email"
            fullWidth
            autoComplete="cc-email"
          />
        </Grid>

        <Grid item xs={10} md={2}>
          <select
            id="docType"
            name="docType1"
            data-checkout="docType1"
            type="text"
          >
           
          </select>
        </Grid>

        <Grid item xs={10} md={4}>
          <TextField
            required
            id="doc"
            label="CPF/CNPJ"
            fullWidth
            autoComplete="cc-doc"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Titular do cartão"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber1"
            label="CA"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="expmes"
            label="MM"
            fullWidth
            autoComplete="cc-mes"
          />
        </Grid>
        <Grid>/</Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="expano"
            label="AA"
            fullWidth
            autoComplete="cc-ano"
          />
        </Grid>
        <div className="brand"></div>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
