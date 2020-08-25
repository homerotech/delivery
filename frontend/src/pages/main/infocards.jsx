import React from 'react';

 
export default (props) => (<div id="cards">

<div class="card card-image"
  style={{background: "#006400",
    
    margin: "20px 20px 20px 20px"
    }}>


  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
  <h5 class="pink-text"><i class="fas fa-chart-pie"></i> {props.title}</h5>
  <h3 class="card-title pt-2"><strong>{props.subtitle}</strong></h3>
  <p>{props.text}</p>

    </div>
  </div>

</div>

  </div>
)
 
