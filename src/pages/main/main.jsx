import React from 'react';
import Scroll from './scrollview'
import Slide from './slider'
import logo1 from '../../img/download.jpeg';
import logo2 from '../../img/download (1).jpeg';
import logo3 from '../../img/download (2).jpeg';
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
          <br/>
            <h3 style={{color: "#08284d", fontFamily: "'Anton', sans-serif"}}>Seu Catálogo de produtos com pedidos via WhatsApp e plataforma de pagamentos!</h3>
            
            {/* barra vermelha */}
            <br/>
            <Slide data-aos="fade-zoom-in"/>
<br/>
<a href="#" style={{color: "white"}}><li class="media"  data-aos="fade-left">
    
    <div class="card-body card" style={{backgroundColor: "#1672d7"}} data-aos="fade-zoom-in">
      <h3 class="mt-0 mb-1">Começe a vender pela internet hoje mesmo</h3>
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
            <ul class="list-unstyled " style={{backgroundColor: "green"}} >
            
  <a href="#" style={{color: "green"}}><li class="media"  data-aos="fade-left">
    
    <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} data-aos="fade-zoom-in">
      <small>70 produtos</small>
      <h2 class="mt-0 mb-1">R$49,90</h2>
      Pago trimestralmente
      <a href="#" class="btn btn-primary" style={{backgroundColor: "#B8860B", border:"none"}}>Trimestral</a>
    </div>
      
  </li></a>

  <a href="#" style={{color: "green"}}><li class="media"  data-aos="fade-right">
    
    <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} data-aos="fade-zoom-in">
      <small>120 produtos</small>
      <h2 class="mt-0 mb-1">R$89,90</h2>
      Pago semestralmente
      <a href="#" class="btn btn-primary" style={{backgroundColor: "#B8860B", border:"none"}}>Semestral</a>
    </div>
      
  </li></a>

    
 
  <a href="#" style={{color: "green"}}><li class="media"  data-aos="fade-left">
    
    <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} data-aos="fade-zoom-in">
      <small>250 produtos</small>
      <h2 class="mt-0 mb-1" >R$169,90</h2>
      Pago anualmente
      <a href="#" class="btn btn-primary" style={{backgroundColor: "#B8860B", border:"none"}}>Anual</a>
    </div>
      
  </li></a>

  <br/>  <br/>
</ul>
<p  style={{color: "#00b300"}}><br/>Garantia de 10 dias de reembolso. <br/>Integração com WhatsApp e plataforma de pagamento<br/> Pedidos ilimitados<br/> Opções de pagamento<br/>Opções de entrega<br/>Link de compartilhamento<br/></p>

        </div>
    )
}