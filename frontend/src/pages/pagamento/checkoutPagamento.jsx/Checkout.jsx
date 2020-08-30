import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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

const steps = ['Dados do Cliente', 'Dados do pagamento', 'Revisão do pedido'];

function getStepContent(step) {
  switch (step) { 
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
    }
}

function testeNullInput(step) {
  var returnStatement= true;
  if(step==0){
    var nome =document.getElementById('firstName').value;
    var sobrenome =document.getElementById('lastName').value;
    var adres =document.getElementById('address1').value;
    var cidade =document.getElementById('city').value;
    var CEP =document.getElementById('zip').value;
    var tel_n =document.getElementById('cel').value;
    if(nome.length==0){returnStatement=false;}
    if(sobrenome.length==0){returnStatement=false;}
    if(adres.length==0){returnStatement=false;}
    if(cidade.length==0){returnStatement=false;}
    if(CEP.length==0){returnStatement=false;}
    if(tel_n.length==0){returnStatement=false;}
  }
  if(step==1){
    var nome_c =document.getElementById('cardName').value;
    var CA =document.getElementById('CA').value;
    var expDT =document.getElementById('cvv').value;
    var CVV =document.getElementById('city').value;
    
    if(nome_c.length==0){returnStatement=false;}
    if(CA.length==0){returnStatement=false;}
    if(expDT.length==0){returnStatement=false;}
    if(CVV.length==0){returnStatement=false;}
  } 
  return returnStatement;
}

export default function Checkout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleNext = () => {
    if(testeNullInput(activeStep)){
      setActiveStep(activeStep + 1);
    }
      setOpen(true);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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
            {activeStep == steps.length ? (
              <React.Fragment>
                <Typography variant="h1" gutterBottom>
                  Obrigado por Comprar com Lojas Fácil.
                </Typography>
                <Typography variant="subtitle1">
                  O número do seu pedido é #2001539. Enviamos um email para confirmação do seu pedido, voltaremos 
                  com qualquer atualização do seu pedido.
                </Typography>
              </React.Fragment>
            ):(
              <React.Fragment>
                
                {getStepContent(activeStep)}
                  
                  {activeStep < 2 && (
                    <Typography variant="subtitle2" style={ {display:"flex",float : "left", color: '#bababa'}} >
                    * = Campo Obrigátório
                    </Typography>
                  )}
                  
                  <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}



                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep == steps.length - 1 ? 'Realizar pedido' : 'Próximo'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Campo Obrigatório Vazio"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      </main>
    </React.Fragment>
  );}