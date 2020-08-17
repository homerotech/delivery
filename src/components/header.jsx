import React from 'react';
import Header from './header2'
import './header.css';
import logo from '../img/png.png'
export default (props)=>{
    return(
        <div className="navigation-bar">   
               <a href="/"><img id="logoheader" src={logo}></img><h2 style={{color: "#08284d", fontFamily: "'Anton', sans-serif" }}>Lojas fácil</h2></a> 
               
                <Header/>
               
        </div>
    )
}