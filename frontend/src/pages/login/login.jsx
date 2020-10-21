import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../../components/header';



import { withRouter, Link } from 'react-router-dom';

import withState from '../../Context/withState';

const Login = ({ store, actions }) => {


 
//   login(event){
//     var data = {
//       email: this.state.email,
//       senha: this.state.senha,
//     }
//     data = JSON.stringify(data)
//     event.preventDefault();

//     fetch("http://localhost:5000/api/login",{
//       method:"POST",
//       headers: {'Content-Type': 'application/json'},
//       body:data
//         }).then(
//           async res =>{
//             if(res.status===401){
//               document.getElementById("incorrect").innerHTML = "E-mail ou senha incorretos"
//             }
//             else{
//               const object = await res.json()
//               Cookies.set('name', object.session, { expires: 7 })
//               window.location.href='/dashboard'
//             }
//           }
//         )
      
//   }

//   handleChange(event){
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//         [name]:value
//     });
// }


    return (
      <div>
        <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <h1>Entrar</h1>
          <span id="incorrect" style={{color:'red'}}>  {store.error && <p className="login__error">{store.error}</p>}</span>
          <form className="login__form" onSubmit={actions.onLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={store.email || ''}
              name="email"
              onChange={e => actions.handleChange(e)}
              id="email"
              label="E-mail"
              type="email"
 
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              value={store.password || ''}
              name="password"
              onChange={e => actions.handleChange(e)}
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

            ><a href="/dashboard">
              Entre</a>
            </Button>
            <Grid container>
              
              <Grid item>
                <a href="/cadastro" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </a>
              </Grid>
            </Grid>
          </form>
        </div>
        
      </Container></div>
    );
  }


  export default withRouter(withState(Login));