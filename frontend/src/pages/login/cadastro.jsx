import React , { useState }  from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Header from '../../components/header'


class SignUp extends React.Component {

  constructor(){
    super()
    this.state={
      Nome: '',
      Sobrenome: '',
      Email:'',
      Senha:'',
      documento:'',
      emprendimento: null
    }
  }

  render(){
  return (
  <div>
    <Header/>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
      <h1>Cadastre-se</h1>
        <form  noValidate>
        <FormControl component="fieldset">
  <FormLabel component="legend">Tipo de cadastro</FormLabel>
  <RadioGroup aria-label="gender" name="tipoempreendimento" >
    <FormControlLabel value="Empreendimento" control={<Radio />} label="Empreendimento" />
    <FormControlLabel value="Consumidor" control={<Radio />} label="Consumidor" />
    
  </RadioGroup>
</FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                value={this.state.Nome}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
                value={this.state.Sobrenome}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="documento"
                label="CPF/CNPJ"
                value={this.state.documento}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={this.state.Email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.Senha}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Eu aceito os termos e permissões do site"
              />
              <br/>
              <a href="../../../public/termos-lojas-facil-01-_1_.html" > Confira os termos e permissões</a>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // alterar
            href="/cadastropag"
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

}

export default SignUp