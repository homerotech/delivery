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
import Checkout from './pages/pagamento/checkoutPagamento/Checkout'
import PrivateRoute from './PrivateRoute'
import dashboard from './pages/dashboard/dashboard'
import Termo from './pdf/pdf'
import Dash from './dashboardMAGNUM/Components/Main'
import cadastroDeCardapio from './pages/login/cadastroDeCardapio'
import cadastrodeprodutos from './pages/login/cadastrodeprodutos';
import testandocatalogo from './pages/catalogosEEmpresas/testandocatalogo';

import Planos from './pages/pagamento/Planos'

function Routes(){
    return(
 <BrowserRouter>
     <Switch>
        <Route path="/" exact component={main}/>
        <Route path="/login" component={login}/>   
        <Route path="/cadastro" component={cadastro}/>     
        <Route path="/contato" component={contato}/>   
        <PrivateRoute path="/cadastroRestaurante" component={restaurantecadastro}/> 
        <PrivateRoute path="/dashboard" component={dashboard}/> 
        <PrivateRoute path="/Planos" component={Planos}/> 
        <Route path="/pgempresas" component={pgempresas}/>     
        
        <Route path="/cardapio" component={catalogo}/> 
        <Route path="/t/:url" component={testandocatalogo}/>  
        <Route path="/loginpag" component={loginPag}/>   
        <Route path="/cadastropag" component={cadastropag}/>
        <Route path="/Checkout" component={Checkout}/>
        <PrivateRoute path="/cadastroDeCardapio" component={cadastroDeCardapio}/> 
        <PrivateRoute path="/cadastroDeProdutos" component={cadastrodeprodutos}/>  
        <Route path="/termos" component={Termo}/>
        <Route exact path="/dashadmin" component={Dash}/>
     </Switch>
 </BrowserRouter>);
};

 
export default Routes;