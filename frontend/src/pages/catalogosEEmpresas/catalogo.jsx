import React, {useState} from 'react';
import CountProvider, {useCount} from '../../Context/Context'

import {Link} from 'react-router-dom'

import logorestaurante from '../../img/logo-restaurante.png';

import './catalogo.css';
import Produto from './produtos'
import AlertOpen from './AlertOpen';
import AlertClose from './AlertClose';
import Button from './buttonclasses'

import logo3 from '../../img/download (2).jpeg';

import dateStore from './dataStore';
import date from './datacatalog';

import RoomIcon from '@material-ui/icons/Room';
import Pagamento from './pagamentosNaHora';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



  

export default (props)=>{
const {produtos, setProdutos} = useCount();



var pago = produtos.map((elistop)=>{
  return(
    <li class="list-group-item d-flex justify-content-between align-items-center" key={elistop}>
    {elistop[0]}
  <span class="badge badge-primary badge-pill">R$ {elistop[1]}</span></li>
  )
})

  const lis = date.map((date)=>{
    return(
      //Concertando codigos, tem de colocar a imagem no objeto
      <Produto img={logo3} title={date.title} preco={date.preco} codigo={date.codigo} click={()=>{
        setProdutos([...produtos, [date.title, date.preco, date.codigo]]);
      }}/>
    );
  })


//pagamento na hora

const pag = dateStore.map((dateStore)=>{
   
  

    if(dateStore.ticket === true){
     
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

var WhatsApp = dateStore.map((zap)=>{
  return(
   <a className="btn btn-outline-success botaozap"   href={"https://api.whatsapp.com/send?phone="+ zap.num +"&text=%20PEDIDO%20LOJAS%20FACIL"+produtos.map((elis)=>{
    return(
     ` ${elis[1]} %20 ${elis[0]}%0a`
    )})  
    }><WhatsAppIcon /></a>
   
  )
});








function passadados(dados){
          return dados=produtos
}



    return(
     <CountProvider>
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
  {pago}
</ul>
<br/>
<Link to={{
    pathname: "/Checkout",
    data: produtos // your data array of objects
  }}
><button type="button" class="btn btn-success btn-lg btn-block" click={ ()=>{useCount(produtos)}} >Realizar pedido</button></Link>
<br/>
    <div className><p style={{color:"black"}}>
      <br></br>
      <h5>Será acrescido R$0,10 por pedido</h5>
      
      Qualquer alteração fale direto com o WhatsApp do fornecedor.</p>{WhatsApp}</div>
<br/>
        </div>
        </CountProvider>
    )
}

// +produtos.map((zop)=>{
  // return(`nome=${zop[0]}&preco=${zop[1]}`)})