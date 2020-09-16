import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"

import Produtos from "./Produtos/Produtos"
import NovoProduto from "./Produtos/NovoProduto"



import {BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css'

class App extends React.Component{

    render(){
    return(
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route exact path={"/"} component={Home} />
          
            <Route exact path={"/dashadmin/produtos"} component={Produtos} />
           
            <Route exact path={"/dashadmin/novoProduto/"} component = { NovoProduto } />
           
            
        </Switch>
        <Footer />
        </div>
        </BrowserRouter>
    )}
}

export default App