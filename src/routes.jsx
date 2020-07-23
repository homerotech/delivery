import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import main from './pages/main/main'
import login from './pages/login/login'
import cadastro from './pages/login/cadastro'
import contato from './pages/contato/contato'
import restaurantecadastro from './pages/login/cadastroRestaurantes'
function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        
        <Route path="/" exact component={main}/>
        <Route path="/login" component={login}/>   
        <Route path="/cadastro" component={cadastro}/>     
        <Route path="/contato" component={contato}/>   
        <Route path="/cadastroRestaurante" component={restaurantecadastro}/>     
     </Switch>
 </BrowserRouter>);
};
export default Routes;