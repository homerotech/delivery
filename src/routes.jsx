import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import main from './pages/main/main'
import login from './pages/login/login'
import cadastro from './pages/login/cadastro'
import contato from './pages/contato/contato'
import restaurantecadastro from './pages/login/cadastroRestaurantes'
import pgempresas from './pages/catalogosEEmpresas/pgEmpresas'
import catalogo from './pages/catalogosEEmpresas/catalogo';
import loginPag from './pages/pagamento/loginPag'
import cadastropag from './pages/pagamento/cadastropag';
import Checkout from './pages/pagamento/checkoutPagamento.jsx/Checkout'



function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        
        <Route path="/" exact component={main}/>
        <Route path="/login" component={login}/>   
        <Route path="/cadastro" component={cadastro}/>     
        <Route path="/contato" component={contato}/>   
        <Route path="/cadastroRestaurante" component={restaurantecadastro}/> 
        <Route path="/pgempresas" component={pgempresas}/>     
        <Route path="/cardapio" component={catalogo}/>  
        <Route path="/loginpag" component={loginPag}/>   
        <Route path="/cadastropag" component={cadastropag}/>
        <Route path="/Checkout" component={Checkout}/>
        
     </Switch>
 </BrowserRouter>);
};
export default Routes;