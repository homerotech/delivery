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
    }
    this.handleChange = this.handleChange.bind(this);
    this.cadastrarCliente = this.cadastrarCliente.bind(this);


  }

  cadastrarCliente(){
    var data = {
      _id: 2,
      nome: this.state.Nome,
      sobrenome: this.state.Sobrenome,
      email: this.state.Email,
      senha: this.state.Senha,
      documento: this.state.documento
    }
    data = JSON.stringify(data)
        console.log(data)
        fetch('http://localhost:5000/api/cadastro',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:data
        }).then(alert('Cadastrado com sucesso'))
        .catch(err => alert(err))
        window.location.href = "/";

  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    });
    console.log(value)
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

</FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Nome"
                variant="outlined"
                required
                fullWidth
                id="Nome"
                label="Nome"
                value={this.state.Nome}
                autoFocus
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Sobrenome"
                label="Sobrenome"
                name="Sobrenome"
                autoComplete="lname"
                value={this.state.Sobrenome}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="documento"
                variant="outlined"
                required
                fullWidth
                type="number"
                id="documento"
                label="CNPJ"
                value={this.state.documento}
                autoFocus
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email"
                name="Email"
                autoComplete="Email"
                value={this.state.Email}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Senha"
                label="Senha"
                type="password"
                id="Senha"
                autoComplete="current-password"
                value={this.state.Senha}
                onChange={this.handleChange}
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
            onClick={this.cadastrarCliente}
            fullWidth
            variant="contained"
            color="primary"
            // alterar
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