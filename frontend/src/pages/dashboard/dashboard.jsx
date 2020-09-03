import React from 'react';
import Header from '../../components/header'
import Button from '@material-ui/core/Button';

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
                <h1 style={{color: "black"}}>Bem vindo Cliente</h1>
                <Button>Cadastrar novo Cardapio</Button>
                <Button>Cadastrar novo Restaurante</Button>
                <Button>Cadastrar novos Produtos</Button>
            </div>
        )
        }

    }

export default pgEmpresas