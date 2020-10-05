module.exports = (app) => {


const bodyParser = require('body-parser');
const mercadopago = require('mercadopago');



// Set the mercadopago credentials
mercadopago.configurations.setAccessToken('TEST-169606388010973-082414-1c20929a9443e6f84e4f7a855affe0a8-464359136');

// Attach the body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/pay', function (req, res) {
  console.log(`Parameters receive ${JSON.stringify(req.body)}`);

  // Creating payment payload
  const paymentData = {
 
        transaction_amount: Number(req.body.plano[1]),
        token: req.body.token,
        description: req.body.plano[0],
        installments: 1,
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

  // Do payment
  mercadopago.payment.save(paymentData).then((payment) => {
    console.log('Payment done!');
    res.send(payment);
  }).then(
      //AUMENTA NO BANCO DE DADOS
  ).catch(function (error) {
    console.log(`There was an error making the payment ${error.message}`);
    res.status(500).send({
      message: error.message
    });
  });
});


}

// }curl -X POST  -H "Content-Type: application/json"  -H 'Authorization: Bearer TEST-1922384788759927-100402-4002afcffda4c9a735b8b62869240180-443219219'  "https://api.mercadopago.com/users/test_user"  -d '{"http://localhost:5000/pay":"MLB"}'
