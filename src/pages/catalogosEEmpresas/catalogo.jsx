import React from 'react'
import logorestaurante from '../../img/logo-restaurante.png';
import '../../components/header'
import './catalogo.css'
import AlertOpen from './AlertOpen';
import AlertClose from './AlertClose';

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




</div>
        </div>
    )
}