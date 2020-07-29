import React from 'react';

import logo1 from '../../img/download.jpeg';
import logo2 from '../../img/download (1).jpeg';
import logo3 from '../../img/download (2).jpeg';

import Empresas from './empresas'
import Header from '../../components/header'
export default (props)=>{
    return(
        <div>
            <Header/>
            <Empresas img={logo1} title="rodizio"  />
            <Empresas img={logo3} title="tapiocaria" />
            <Empresas img={logo2} title="pizzaria" />
            <Empresas img={logo1} title="hamburgueria" />
            <Empresas img={logo3} title="Pastel top 10" />
            <Empresas img={logo2} title="rodizio" />
            <Empresas img={logo3} title="rodizio" />
            <Empresas img={logo1} title="rodizio" />
            <Empresas img={logo2} title="rodizio" />
            <Empresas img={logo3} title="rodizio" />
            <Empresas img={logo1} title="rodizio" />
        </div>
    )
}