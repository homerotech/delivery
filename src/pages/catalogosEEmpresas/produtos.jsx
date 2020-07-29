import React from 'react';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';


export default (props)=>{
    
    
    return(
<div style={{color: "black", marginTop: "20px"}}>

    
        <li class="media">
            <img class="mr-3 mainimage" src={props.img} alt="Generic placeholder image"/>
            <div class="media-body">
    <h5 class="mt-0 mb-1">{props.title}</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
            </div>
    <hr style={{color: "green"}}/>
        </li>
        <div style={{color: "black", marginTop: "20px"}} class="card-footer"><a id="shopicon" href="#">Acrescentar pedido</a></div>
  <hr style={{color: "green"}}/>
</div>
    )
}