import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from '../../components/header'
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
    
    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(11),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    
<div>  
  <Header/>  
    <Container component="main" maxWidth="xs">
    

    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Que bom que estão cadastrando seu restaurante!</h4>
  <p>Todos seus dados serão avaliados e em breve entraremos em contato com vocês, e enviaremos um link com os dados de pagamento e termos!</p>
  
</div>

      <CssBaseline />
      <div className={classes.paper}>
      <h1>Cadastre sua loja!</h1>
        <form className={classes.form} noValidate>
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Empreendimento"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tipoDoEmpredimento"
                label="Tipo"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                variant="outlined"
                required
                fullWidth
                id="CNPJ"
                label="CNPJ"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
            <div class="input-group">
 
  
</div>
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Eu aceito os termos e permissões do site"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href={"/cadastroDeCardapio/false"}
          >
            Cadastre-se
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Já tem uma conta? Realize o login!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container></div>
  );
}