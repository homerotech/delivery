import React,{useState} from 'react'
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

import dateStore from './dataStore'
import date from './datacatalog'

import RoomIcon from '@material-ui/icons/Room';
import Pagamento from './pagamentosNaHora';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import dataStore from './dataStore';
import {Link} from 'react-router-dom'
 
export default (props)=>{
  //pegando dados
  const lis = date.map((date)=>{
    return(
      //Concertando codigos, tem de colocar a imagem no objeto
      <Produto img={logo3} title={date.title} preco={date.preco} codigo={date.codigo}/>
    );
  })
  const [count, setCount]=useState(0)
  
//pagamento na hora

const pag = dateStore.map((dateStore)=>{
   
  

    if(dateStore.ticket == true){
     
      return(
        
        <Pagamento/>
      )
    }
  })
  //aberto ou fechado component
  var d = new Date();
  var now = d.getHours() + "." + d.getMinutes();
  const aberto = dateStore.map((dateStore)=>{
    
    if(now <= dateStore.abertura || now >= dateStore.fechamento ){
    return(
        <AlertClose/>
    )

}else {
return(
    <AlertOpen/>
)}})
//botao do zap

var WhatsApp = dateStore.map((dateStore)=>{
  return(
   <button className="btn btn-outline-success botao zap" tag = {Link}  to ={"https://wa.me/"+dataStore.num}><WhatsAppIcon /></button>
   
  )
});





    return(
     
        <div>
        {aberto}      
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
<hr/>
<div>
  {lis}         
</div>
{pag}
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
    <div className><p style={{color:"black"}}>Qualquer alteração no pedido consultar o WhatsApp do fornecedor.</p>{WhatsApp}</div>
<br/>
        </div>
    )
}