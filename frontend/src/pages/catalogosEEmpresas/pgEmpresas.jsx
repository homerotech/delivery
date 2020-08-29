import React from 'react';

import logo1 from '../../img/download.jpeg';
import logo2 from '../../img/download (1).jpeg';
import logo3 from '../../img/download (2).jpeg';

import Empresas from './empresas'
import Header from '../../components/header'
import empresas from './empresas';

class pgEmpresas extends React.Component {

    constructor(){
        super()
        this.state= {
            isLoading: true,
            Empresas: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/restaurante").then(
            produtos => produtos.json()
            )
        .then(data => {
            this.setState({
                Empresas: data,
                isLoading: false
            })
        })
        .catch(err => console.log(err))

    }

    render(){
        const empresaComponents = (this.state.Empresas && this.state.Empresas.length) ? this.state.Empresas.map(empresa => <Empresas title={empresas.name} />) : <h2 style={{textAlign:"center", color:'black'}}>Nenhum Restaurante Cadastrado</h2>;
        const loading = this.state.isLoading ? <h5 style={{color:'black'}}>Carregando...</h5> : empresaComponents 
        return(
            <div>
                <Header/>   
                {loading}
            </div>
        )
        }

    }

export default pgEmpresas