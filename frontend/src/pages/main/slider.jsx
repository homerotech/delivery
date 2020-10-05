import React from 'react';
import logo1 from '../../img/1.png';
import logo2 from '../../img/2.png';
import logo3 from '../../img/3.png';
import logo4 from '../../img/4.png';
import logo5 from '../../img/5.png';

export default (props)=>{
    return(
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo1} class="d-block w-100 carousel" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo2} class="d-block w-100 carousel" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo3} class="d-block w-100 carousel" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo4} class="d-block w-100 carousel" alt="..."/>
    </div>
        <div class="carousel-item">
      <img src={logo5} class="d-block w-100 carousel" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}