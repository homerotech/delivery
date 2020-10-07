import React, { useRef } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const scrollToRef = (ref) => window.scrollTo(0, document.body.scrollHeight)

export default (props)=>{
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    return(
<div style={{color: "black", marginTop: "20px"}}>

    
        <li class="media">
            <div className="container-image"><img class="mr-3 imagemdoproduto" src={process.env.PUBLIC_URL +"/uploads/" + props.img + ".png"} alt="Generic placeholder image"/></div>
            <div class="media-body">
    <h5 class="mt-0 mb-1">{props.title}</h5>
            {props.descricao} 
            </div>
    <hr style={{color: "green"}}/>
        </li>
    <div style={{color: "black", marginTop: "20px"}} class="card-footer"><h5 className="preco">R${props.preco}</h5><small> {props.codigo}</small>
    <button id="shopicon" className="btn btn-outline-success" onClick={props.click} ><AddShoppingCartIcon/></button></div>
  <hr style={{color: "green"}}/>
</div>
    )
}