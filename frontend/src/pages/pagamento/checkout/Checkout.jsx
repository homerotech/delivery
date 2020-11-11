import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { CountProvider, useCount } from "../../../Context/Context";
import axios from "axios";
import produtos from "../../catalogosEEmpresas/produtos";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];
var nome;
var sobrenome;
var adres;
var cidade;
var CEP;
var tel_n;
var doc;
var nome_c;
var CA;
var docty1;
var numcard;
var datavenc;
var expmes;
var expano;
var CVV;
var email;
var doccpf;

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm 
   
      />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review
      name={nome}
      sobrenome={sobrenome}
      endereco={adres}
      cidade={cidade}
      cep={CEP}
      teln={tel_n}
      nomecard={nome_c}
      numero={numcard}
      dataven={expmes}
      datavenca={expano}
      produtos={produtos} />;
    default:
      throw new Error('Unknown step');
  }
}

function testeNullInput(step) {
  var returnStatement = true;
  if (step == 0) {

    nome = document.getElementById("firstName").value;
    sobrenome = document.getElementById("lastName").value;
    adres = document.getElementById("address1").value;
    cidade = document.getElementById("city").value;
    CEP = document.getElementById("zip").value;
    tel_n = document.getElementById("cel").value;
    if (nome.length == 0) {
      returnStatement = false;
    }
    if (sobrenome.length == 0) {
      returnStatement = false;
    }
    if (adres.length == 0) {
      returnStatement = false;
    }
    if (cidade.length == 0) {
      returnStatement = false;
    }
    if (CEP.length == 0) {
      returnStatement = false;
    }
    if (tel_n.length == 0) {
      returnStatement = false;
    }
  }
  if (step == 1) {
    email = document.getElementById("email1").value;
    nome_c = document.getElementById("cardName").value;
    numcard = document.getElementById("cardNumber1").value;
    expmes = document.getElementById("expmes").value;
    expano = document.getElementById("expano").value;
    CVV = document.getElementById("cvv").value;
     
    docty1 = document.getElementById("docType1");
    doc = document.getElementById("doc").value;

    if (document.getElementById("cardName").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("cardNumber1").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("expmes").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("expano").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("email1").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("doc").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("cvv").value.length == 0) {
      returnStatement = false;
    }
  }
  return returnStatement;
}
var total;
export default function Checkout() {
  
  let { produtos, setProdutos } = useCount();
  console.log(produtos);

  let myTotal = 0;
  for (var i = 0, len = produtos.length; i < len; i++) {
    myTotal += parseFloat(produtos[i][1]); // Iterate over your first array and then grab the second element add the values up
  }
  total =myTotal;
  console.log(myTotal);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (testeNullInput(activeStep)) {
      setActiveStep(activeStep + 1);
    }
    setOpen(true);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };






var token;







  // \/\/\/\/\/\/\/PAGAMENTO/\/\/\/\/\/\/\//\
function Pagar(){
 var dados={
    total:total,
    docty1:docty1,
    doc:doc,
    email:email,
    token:token
  };
  axios.post("http://localhost:5000/payment_process", {dados});

}



















  const Payment = () => {
    if (testeNullInput(activeStep)) {
      setActiveStep(activeStep + 1);
      var botao = document.getElementById("pagar");
      botao.click();
    }
    setOpen(true);
  };
  return (
    <React.Fragment>
      <CssBaseline />
     
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      activeStep == steps.length - 1 ? Payment() : handleNext();
                    }}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Realizar pedido' : 'Próximo'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}