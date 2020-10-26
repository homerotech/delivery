import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../../components/header';
import Cookies from 'js-cookie'



class SignIn extends React.Component {

  constructor(){
    super()
    this.state={
      email:"",
      senha:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(event){
    var data = {
      email: this.state.email,
      senha: this.state.senha,
    }
    data = JSON.stringify(data)
    event.preventDefault();

    fetch("http://localhost:5000/api/login",{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body:data
        }).then(
          async res =>{
            if(res.status===401){
              document.getElementById("incorrect").innerHTML = "E-mail ou senha incorretos"
            }
            else{
              const object = await res.json()
              Cookies.set('session', object.session, { expires: 864000 })
              window.location.href='/dashboard'
            }
          }
        )
      
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    });
}

  render(){
    return (
      <div>
        <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <h1>Entrar</h1>
          <span id="incorrect" style={{color:'red'}}></span>
          <form onSubmit={this.login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.email}
              onChange={this.handleChange}
              id="email"
              label="E-mail"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              value={this.state.senha}
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Entre
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/cadastro" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        
      </Container></div>
    );
  }

}

export default SignIn