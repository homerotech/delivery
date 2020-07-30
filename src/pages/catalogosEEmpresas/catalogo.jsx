import React from 'react'
import logorestaurante from '../../img/logo-restaurante.png';
import '../../components/header'
import './catalogo.css'
import Produto from './produtos'
import AlertOpen from './AlertOpen';
import AlertClose from './AlertClose';
import Button from './buttonclasses'
import logo1 from '../../img/download.jpeg';
import logo2 from '../../img/download (1).jpeg';
import logo3 from '../../img/download (2).jpeg';


import RoomIcon from '@material-ui/icons/Room';
export default (props)=>{
  var d = new Date();
  var now = d.getHours() + "." + d.getMinutes();
  function aberto(){if(now>=22.00 || now<=11.00){
      
    return(
        <AlertClose/>
    )

}else {
return(
    <AlertOpen/>
)}}
    return(
     
        <div>
        {aberto()}      
            <div class="jumbotron p-0">


<div class="view overlay rounded-top">
  <img src={logorestaurante} class="img-fluid logoRestaurante" alt="Sample image"/>
  
</div>


<div class="textoAtras card-body text-center mb-3">


  <h3 class="card-title h3 my-4"><strong>Restaurante</strong></h3>

  <p class="card-text py-2">A melhor pizza de todo rio de janeiro, a experiência da itália no Brasil</p>
    <small><RoomIcon/> Rio de Janeiro, Rua Nascimento Silva 107, Ipanema</small>
</div>

<div>
<Button/>
</div>
<h1 style={{color: "#000b23"}}>Produtos</h1>
<div>
            <Produto img={logo1} title="Macarrão Carbonara"  preco="50.00" codigo="55450"/>
            <Produto img={logo3} title="Pizza de catupiry" preco="20.00"codigo="55451"/>
            <Produto img={logo2} title="Pizza de chocolate" preco="40.00"codigo="55452"/>
            <Produto img={logo1} title="Churrasco" preco="16.00"codigo="55454"/>
            <Produto img={logo3} title="Torresmo" preco="4.50"codigo="55455"/>
            <Produto img={logo2} title="Sanduíches" preco="60.50"codigo="55456"/>
            <Produto img={logo3} title="rodizio" preco=""/>
            <Produto img={logo1} title="rodizio" preco=""/>
            <Produto img={logo2} title="rodizio" preco=""/>
            <Produto img={logo3} title="rodizio" preco=""/>
            <Produto img={logo1} title="rodizio" preco=""/>
</div>

</div>
<h5 style={{color: "#000b23"}}>Pedidos</h5>
<ul class="list-group" style={{color: "#000b23"}}>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Pizza de peperoni
    <span class="badge badge-primary badge-pill">R$14.00</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Vinho do porto
    <span class="badge badge-primary badge-pill">R$2.00</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Chiclete
    <span class="badge badge-primary badge-pill">R$1.00</span>
  </li>
</ul>
<br/>
<a href="/loginpag"><button type="button" class="btn btn-success btn-lg btn-block" href="/pagamento">Realizar pedido</button></a>

<br/>
        </div>
    )
}