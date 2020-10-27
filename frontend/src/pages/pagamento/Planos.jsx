import React, {useState} from 'react';
import CountProvider, {useCount} from '../../Context/Context'

import {Link} from 'react-router-dom'

import Header from '../../components/header'



  

export default (props)=>{
const {produtos, setProdutos} = useCount([]);



console.log(produtos)

function passadados(dados){
          return dados=produtos
}



    return(
     <CountProvider>
        <div>
            <Header/>
        <ul class="list-unstyled " style={{backgroundColor: "green"}}  >
            
            <a style={{color: "green"}}><li class="media"  >
              
              <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}}>
                <small>70 produtos</small>
                <h2 class="mt-0 mb-1">R$49,90</h2>
                Pago trimestralmente
                <Link to={{
    pathname: "/Mensalidade",
    data: produtos // your data array of objects
  }}
><a class="btn btn-primary" onClick={()=>{setProdutos([["Plano Trimestral", 49.9, '3']])}} style={{backgroundColor: "#B8860B", border:"none",color: "white"}}>Trimestral</a>
 </Link>             </div>
                
            </li></a>
          
          
            <a style={{color: "green"}}>
              <li class="media" >
                
                <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} >
                  <small>120 produtos</small>
                  <h2 class="mt-0 mb-1">R$89,90</h2>
                  Pago semestralmente
                  <Link to={{
    pathname: "/Mensalidade",
    data: produtos // your data array of objects
  }}
><a> <a  class="btn btn-primary" onClick={()=>{setProdutos([["Plano Semestra", 89.9, '6']])}} style={{backgroundColor: "#B8860B", border:"none", color: "white"}}>Semestral</a></a>
     </Link>           </div>
                
              </li>
            </a>
          
              
           
            <a style={{color: "green"}}><li class="media" >
              
              <div class="card-body card container sobreprecos" style={{backgroundColor: "white"}} >
                <small>250 produtos</small>
                <h2 class="mt-0 mb-1" >R$169,90</h2>
                Pago anualmente
                <Link to={{
    pathname: "/Mensalidade",
    data: produtos // your data array of objects
  }}
><a class="btn btn-primary" onClick={()=>{setProdutos([['Plano Anual', 2, '12']])}} style={{backgroundColor: "#B8860B", border:"none",color: "white"}}>Anual</a>
</Link>            </div>
                
            </li></a>
          
            <br/>  <br/>
          </ul>

<br/>
 
<br/>
        </div>
        </CountProvider>
    )
}
