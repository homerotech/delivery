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

import Empresas from './empresas'
export default (props)=>{
  const alerta = function(){if(props.open === true){
      
    return(
        <AlertOpen/>
    )

}else {
return(
    <AlertClose/>
)}}
    return(
     
        <div>
        <AlertOpen/>       
            <div class="jumbotron p-0">


<div class="view overlay rounded-top">
  <img src={logorestaurante} class="img-fluid" alt="Sample image"/>
  
</div>


<div class="textoAtras card-body text-center mb-3">


  <h3 class="card-title h3 my-4"><strong>Restaurante</strong></h3>

  <p class="card-text py-2">A melhor pizza de todo rio de janeiro, a experiência da itália no Brasil</p>

</div>

<div>
<Button/>
</div>
<div>
<Produto img={logo1} title="Macarrão Carbonara"  />
            <Produto img={logo3} title="Pizza de catupiry" />
            <Produto img={logo2} title="Pizza de chocolate" />
            <Produto img={logo1} title="Churrasco" />
            <Produto img={logo3} title="Torresmo" />
            <Produto img={logo2} title="Sanduíches" />
            <Produto img={logo3} title="rodizio" />
            <Produto img={logo1} title="rodizio" />
            <Produto img={logo2} title="rodizio" />
            <Produto img={logo3} title="rodizio" />
            <Produto img={logo1} title="rodizio" />
</div>

</div>
        </div>
    )
}