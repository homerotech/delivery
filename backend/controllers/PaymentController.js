module.exports = (app) =>{

const mercadopago = require("mercadopago");
const express = require('express');
//REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel/credentials
mercadopago.configurations.setAccessToken(
  "TEST-2745994227570117-090419-a1649a09cc2897951cf090fc28a08502-166811747"
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client"));

app.get("/", function (req, res) {
  res.status(200).sendFile("index.html");
});

app.post("/process_payment", (req, res) => {
  var payment_data = {
    transaction_amount: Number(req.body.transactionAmount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    payer: {
      email: req.body.email,
      identification: {
        type: req.body.docType,
        number: req.body.docNumber,
      },
    },
  };

  mercadopago.payment
    .save(payment_data)
    .then(function (response) {
      res.status(response.status).json({
        status: response.body.status,
        status_detail: response.body.status_detail,
        id: response.body.id,
      });
    })
    .catch(function (error) {
      res.status(response.status).send(error);
    });
});}