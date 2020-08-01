import React from 'react';
import Scroll from './scrollview'
import Slide from './slider'
import logo1 from '../../img/download.jpeg';
import logo2 from '../../img/download (1).jpeg';
import logo3 from '../../img/download (2).jpeg';
import './main.css'
import Header from '../../components/header'


import AOS from 'aos'


export default (props)=>{
  AOS.init({
    duration : 2000
  }) 
  return(
        <div>
          <Header/>
            <h3 style={{color: "black"}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
            <div data-aos="fade-right"><Scroll/></div>
            {/* barra vermelha */}
            <div style={{background: "black"}}><a>Confira os melhores restaurantes!</a></div>
            <Slide data-aos="fade-zoom-in"/>

            <ul class="list-unstyled " style={{color: "green"}} data-aos="fade-up">
  <a href="#" style={{color: "green"}}><li class="media">
    <img class="mr-3 mainimage" src={logo1} alt="Generic placeholder image"/>
    <div class="media-body" data-aos="fade-zoom-in">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
    <hr/>
  </li></a>
  <hr/>
  <li class="media my-4">
    <img class="mr-3 mainimage" src={logo2} alt="Generic placeholder image"/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
    <hr/>
  </li>
  <li class="media">
    <img class="mr-3 mainimage" src={logo3} alt="Generic placeholder image"/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>
        </div>
    )
}