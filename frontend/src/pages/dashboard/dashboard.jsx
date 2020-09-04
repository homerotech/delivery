import React from 'react';
import Header from '../../components/header'

import Token from './inserirToken'





// function alertTokenMercadoPago(params) {
//         return(

//         )
// }



class pgEmpresas extends React.Component {

    constructor(){
        super()
        this.state= {
            isLoading: true,
            Empresas: []
        }
    }

   
    render(){
        return(
            <div>
                <Header/>   
                <div className="card">

                <h2 style={{color: "black"}}>Bem vindo Cliente</h2>
                <a className="btn-success btn">Alterar Cardapio</a>
                <br/>
                <a className="btn-success btn">Cadastrar ou alterar pedido</a>
                <br/>
                <a className="btn-success btn">Alterar dados pessoais</a>
                <br/>
                <a className="btn-success btn" ><Token/></a>
                <br/>
               
                </div>

            </div>
        )
        }

    }

export default pgEmpresas