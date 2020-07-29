import React from 'react';

import AlertOpen from './AlertOpen';
import AlertClose from './AlertClose';


export default (props)=>{
    
    
    return(
<div style={{color: "green", marginTop: "20px"}}>

    <a href="/cardapio" style={{color: "green", marginTop: "20px"}}>
        <li class="media">
            <img class="mr-3 mainimage" src={props.img} alt="Generic placeholder image"/>
            <div class="media-body">
    <h5 class="mt-0 mb-1">{props.title}</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
            </div>
    <hr style={{color: "green"}}/>
        </li>
  </a>
  <hr style={{color: "green"}}/>
</div>
    )
}