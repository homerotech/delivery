import React from 'react';
import './pdf.css'
import Header from '../components/header'
import termo1 from './termo1.jpg'
import termo2 from './termo2.jpg'
import termo3 from './termo3.jpg'
import termo4 from './termo4.jpg'
import termo5 from './termo5.jpg'
import termo6 from './termo6.jpg'
import termo7 from './termo7.jpg'
import termo8 from './termo8.jpg'

export default _=>{
    return(
        <div className="termos">
            <Header/>
            <div className="imagenstermos container" >
            <img src={termo1} className="imagensternos" />
            <img src={termo2} className="imagensternos"/>
            <img src={termo3} className="imagensternos"/>
            <img src={termo4} className="imagensternos"/>
            <img src={termo5}  className="imagensternos"/>
            <img src={termo6} className="imagensternos"/>
            <img src={termo7} className="imagensternos"/>
            <img src={termo8} className="imagensternos"/>
        </div>
    </div>)
}