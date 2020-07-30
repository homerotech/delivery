import React, { useRef } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const scrollToRef = (ref) => window.scrollTo(0, document.body.scrollHeight)

export default (props)=>{
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    return(
<div style={{color: "black", marginTop: "20px"}}>

    
        <li class="media">
            <img class="mr-3 mainimage imagemproduto" src={props.img} alt="Generic placeholder image"/>
            <div class="media-body">
    <h5 class="mt-0 mb-1">{props.title}</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
            </div>
    <hr style={{color: "green"}}/>
        </li>
    <div style={{color: "black", marginTop: "20px"}} class="card-footer"><h5 className="preco">R${props.preco}</h5><small>N {props.codigo}</small><button id="shopicon" className="btn btn-outline-success" onClick={executeScroll} ><AddShoppingCartIcon/></button></div>
  <hr style={{color: "green"}}/>
</div>
    )
}