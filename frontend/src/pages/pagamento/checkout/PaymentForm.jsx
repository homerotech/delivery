import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Mercadopago from 'mercadopago'
export default function PaymentForm() {
  window.Mercadopago.getIdentificationTypes();
  window.Mercadopago.setPublishableKey('APP_USR-97d40b6d-ed21-4473-a888-266870cd79af');
  

  function guessPaymentMethod(event) {
     let cardnumber = document.getElementById("cardNumber").value;
     if (cardnumber.length >= 6) {
         let bin = cardnumber.substring(0,6);
         window.Mercadopago.getPaymentMethod({
             "bin": bin
         }, setPaymentMethod);
     }
  };
  if(document.getElementById('cardNumber')!==null){
    document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);

  }
  function setPaymentMethod(status, response) {
     if (status == 200) {
         let paymentMethod = response[0];
         document.getElementById('paymentMethodId').value = paymentMethod.id;
  
         if(paymentMethod.additional_info_needed.includes("issuer_id")){
             getIssuers(paymentMethod.id);
         } 
     } else {
         alert(`payment method info error: ${response}`);
     }
  }
  function getIssuers(paymentMethodId) {
    window.Mercadopago.getIssuers(
        paymentMethodId,
        setIssuers
    );
 }
 
 function setIssuers(status, response) {
    if (status == 200) {
        let issuerSelect = document.getElementById('issuer');
        response.forEach( issuer => {
            let opt = document.createElement('option');
            opt.text = issuer.name;
            opt.value = issuer.id;
            issuerSelect.appendChild(opt);
        });
 
  
    } else {
        alert(`issuers method info error: ${response}`);
    }
 }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pagamento
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
          fullWidth
            id="email" name="email" type="text" 
          />
        </Grid>

        <Grid item xs={2} md={2}>
          <select
            id="docType" name="docType" data-checkout="docType" type="text"
          >
         
          </select>
        </Grid>

        <Grid item xs={10} md={4}>
          <TextField
        id="docNumber" name="docNumber" data-checkout="docNumber" type="text" label="CPF/CNPJ"
          />
        </Grid>
        
        
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="cardName"
            label="Titular do cartão"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          required
            type="text" id="cardNumber" data-checkout="cardNumber"
            onselectstart="return false" onpaste="return false"
            oncopy="return false" oncut="return false"
            ondrag="return false" ondrop="return false"
        
            fullWidth label="cardNumber"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
          
         type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
         onselectstart="return false" onpaste="return false"
         oncopy="return false" oncut="return false"
         ondrag="return false" ondrop="return false" autocomplete='off'
          />
        </Grid>
        <span class="date-separator">/</span>
        <Grid item xs={12} md={3}>
          <TextField
          type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
          onselectstart="return false" onpaste="return false"
          oncopy="return false" oncut="return false"
          ondrag="return false" ondrop="return false" autocomplete='off'
          />

          <TextField
         id="securityCode" data-checkout="securityCode" type="text"
         onselectstart="return false" onpaste="return false"
         oncopy="return false" oncut="return false"
         ondrag="return false" ondrop="return false" label="CVV"
          />
        </Grid>
        <Grid item xs={12}>
        <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
