
module.exports = (app) => {
  const mercadopago = require("mercadopago");
  const express = require("express");
  //REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel/credentials

  // TULIO
  const accountSid = "AC0820abbfdb3a76575a4cf2636871175d";
  const authToken = "52a8836a4accc0b430a80661aa69e19f";
  const client = require("twilio")(accountSid, authToken);

  number = "";
  // TULIO
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.static("../../client"));

  app.get("/", function (req, res) {
    res.status(200).sendFile("index.html");
  });

  app.post("/process_payment", (req, res) => {
    mercadopago.configurations.setAccessToken('APP_USR-3110758028081820-102716-b35afc7ae3e2c0776cd1679cb48fd99e-443219219');
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
      application_fee: 0.5,
    };

    mercadopago.payment.save(payment_data).then(function (response) {
        if (response.status == 200 || response.status == 201) {
          client.messages
            .create({
              body: payment_data.description,
              from: "whatsapp:+14155238886",
              to: "whatsapp:" + number,
            })
            .then((message) => console.log(message.sid))
            .done();
        }
        res.status(response.status).json({
          status: response.body.status,
          status_detail: response.body.status_detail,
          id: response.body.id,
        });
      })
      .catch(function (error) {
        res.status(response.status).send(error);
      });
  });
};

