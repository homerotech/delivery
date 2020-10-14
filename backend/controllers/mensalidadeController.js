module.exports = (app) => {


const bodyParser = require('body-parser');
const mercadopago = require('mercadopago');
var preco;
var meses;

var expires
var parcelas = 1;
// Set the mercadopago credentials
mercadopago.configurations.setAccessToken('APP_USR-1922384788759927-100402-8698a73788e5593c16ed1af40a5e6e2d-443219219');

// Attach the body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/pay', function (req, res) {
  console.log(`Parameters receive ${JSON.stringify(req.body)}`);
  var planos= req.body.plano;
  
  switch (planos) {
    case 'plano1':
      preco = 49.9;
      meses = 3;
      break;
    case 'plano2':
      preco = 89.9;
      meses = 6;
      break;
    case 'plano3':
      preco = 169.9;
      meses = 12;
      break;
    
    default:
      console.log("Irreconhecivel " + planos + ".");
  }
  //5031433215406351
  // Creating payment payload
  const paymentData = {
 
        transaction_amount: 10,
        token: req.body.token,
        description: req.body.plano,
        installments: parcelas,
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
   //multiplica meses por segundos

    expires =  meses*2629800



  ).catch(function (error) {
    console.log(`There was an error making the payment ${error.message}`);
    res.status(500).send({
      message: error.message
    });
  });
});


}

// }curl -X POST  -H "Content-Type: application/json"  -H 'Authorization: Bearer TEST-1922384788759927-100402-4002afcffda4c9a735b8b62869240180-443219219'  "https://api.mercadopago.com/users/test_user"  -d '{"http://localhost:5000/pay":"MLB"}'
