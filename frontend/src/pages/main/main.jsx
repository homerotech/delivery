import React from 'react';
import Scroll from './scrollview'
import Slide from './slider'

import './main.css'
import Header from '../../components/header'
import Catalogo from '../catalogosEEmpresas/catalogo'
import Lottie from './lottie'
import AOS from 'aos'


export default (props)=>{
  AOS.init({
    duration : 1000
  }) 
  return(
        <div>
          <Header/>
        <div style={{background: "#fff5c4" }}> <h3 style={{color: "#08284d", fontFamily: "'Anton', sans-serif" }}><br/>Seu Catálogo de produtos com pedidos via WhatsApp e plataforma de pagamentos!</h3><br style={{background: "#f7d7b2" }}/></div>
           
            
            {/* barra vermelha */}
          
            <Slide data-aos="fade-zoom-in"/>

<a href="#" style={{color: "white", marginTop: "-500px"}}><li class="media"  data-aos="fade-left">
    
    <div class="card-body card" style={{backgroundColor: "#1672d7"}} data-aos="fade-zoom-in">
      <h3 class="mt-0 mb-1">Começe a vender pela internet hoje mesmo</h3>
      <br/>
      Um catálogo digital para você cadastrar seus produtos e seus clientes poderem pedir o que quiserem, quando quiserem de onde estiverem sem intermediários
    </div>
  
  </li></a>

  <br/> <h3 style={{color: "#08284d"}}>Confira o nosso cardápio modelo</h3>
  <div className=" emlinha"> 
  <div class="col-sm-4 ">
 
    <div class="card scroll">
      <Catalogo/>
      
      </div>
      
    </div>
    <br/>
    <Lottie/>
        </div>  <br/>
        <div data-aos="fade-right"><Scroll/></div><br/>
            <ul class="list-unstyled " style={{backgroundColor: "green"}} data-aos="fade-left" >
            
  <a href="#" style={{color: "green"}}><li class="media"  >
    
    <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} data-aos="fade-zoom-in">
      <small>70 produtos</small>
      <h2 class="mt-0 mb-1">R$49,90</h2>
      Pago trimestralmente
      <a href="#" class="btn btn-primary" style={{backgroundColor: "#B8860B", border:"none"}}>Trimestral</a>
    </div>
      
  </li></a>

  <a href="#" style={{color: "green"}}><li class="media" >
    
    <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} >
      <small>120 produtos</small>
      <h2 class="mt-0 mb-1">R$89,90</h2>
      Pago semestralmente
      <a href="#" class="btn btn-primary" style={{backgroundColor: "#B8860B", border:"none"}}>Semestral</a>
    </div>
      
  </li></a>

    
 
  <a href="#" style={{color: "green"}}><li class="media" >
    
    <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} >
      <small>250 produtos</small>
      <h2 class="mt-0 mb-1" >R$169,90</h2>
      Pago anualmente
      <a href="#" class="btn btn-primary" style={{backgroundColor: "#B8860B", border:"none"}}>Anual</a>
    </div>
      
  </li></a>

  <br/>  <br/>
</ul>
<p  style={{color: "#35CC3A"}}><br/>Garantia de 10 dias de reembolso. <br/>Integração com WhatsApp e plataforma de pagamento<br/> Pedidos ilimitados<br/> Opções de pagamento<br/>Opções de entrega<br/>Link de compartilhamento<br/></p>

        </div>
    )
}