import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import main from "./pages/main/main";
import login from "./pages/login/login";
import cadastro from "./pages/login/cadastro";
import contato from "./pages/contato/contato";
import restaurantecadastro from "./pages/login/cadastroRestaurantes";
import pgempresas from "./pages/catalogosEEmpresas/pgEmpresas";
import catalogo from "./pages/catalogosEEmpresas/catalogo";
import loginPag from "./pages/pagamento/loginPag";
import cadastropag from "./pages/pagamento/cadastropag";
import Checkout from "./pages/pagamento/checkoutPagamento/Checkout";
import PrivateRoute from "./PrivateRoute";
import dashboard from "./pages/dashboard/dashboard";
import urlRetorno from "./pages/dashboard/urlRetorno";
import acessarCatalogo from "./pages/dashboard/acessarCatalogo";
import authpage from "./pages/dashboard/authpage";
import Termo from "./pdf/pdf";
import Dash from "./dashboardMAGNUM/Components/Main";
import cadastroDeCardapio from "./pages/login/cadastroDeCardapio";
import cadastrodeprodutos from "./pages/login/cadastrodeprodutos";
import testandocatalogo from "./pages/catalogosEEmpresas/testandocatalogo";
import Planos from './pages/pagamento/Planos'
import Mensalidade from './pages/pagamento/Mensalidade'
import DeletarProdutos from "./pages/dashboard/deletarProdutos";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={main} />
        <Route path="/login" component={login} />
        <Route path="/cadastro" component={cadastro} />
        <Route path="/contato" component={contato} />

        <PrivateRoute
          path="/urlRetorno"
          component={urlRetorno}
        />
        
        <PrivateRoute
          path="/cadastroRestaurante"
          component={restaurantecadastro}
        />  <PrivateRoute
          path="/cadastroDeCardapio"
          component={cadastroDeCardapio}
        />
        <PrivateRoute
          path="/cadastroDeProdutos"
          component={cadastrodeprodutos}
        />
        <PrivateRoute path="/dashboard" component={dashboard} />
        <PrivateRoute path="/authpage" component={authpage} />
        <Route path="/pgempresas" component={pgempresas} />
        <PrivateRoute path="/Planos" component={Planos}/> 
        <PrivateRoute path="/Mensalidade" component={Mensalidade}/>
        <Route path="/pgempresas" component={pgempresas}/>     
        <PrivateRoute path="/deletarProdutos" component={DeletarProdutos}/>
        <Route path="/cardapio" component={catalogo} />
        <Route path="/t/:url" component={testandocatalogo} />
        <Route path="/loginpag" component={loginPag} />
        <Route path="/cadastropag" component={cadastropag} />
        <Route path="/Checkout/:id" component={Checkout} />
        <PrivateRoute path="/acessarCatalogo" component={acessarCatalogo}/>
        <Route path="/termos" component={Termo} />
        <Route exact path="/dashadmin" component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
