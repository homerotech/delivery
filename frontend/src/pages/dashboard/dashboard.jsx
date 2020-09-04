import React from 'react';
import Header from '../../components/header'
import Cookies from 'js-cookie'
import Token from './inserirToken'


class dashboard extends React.Component {

    logout(){
        fetch("http://localhost:5000/api/logout/"+this.props.id,{
            method:"PUT"
        })
        Cookies.remove("session")
        window.location.href= '/';

    }

    constructor(props){
        super(props)
        this.state= {
            isLoading: true,
            Dados: {}
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/cliente/"+this.props.id).then(
            dados => dados.json()
            )
        .then(data => {
            this.setState({
                Dados: data,
                isLoading: false
            })
        })
        .catch(err => console.log(err))

    }

   
    render(){
        return(
            <div>
                <Header/>   
                <div className="card">

                <h2 style={{color: "black"}}>Bem vindo {this.state.Dados.nome}</h2>
                <a className="btn-success btn" href="/cadastroDeCardapio">Alterar Cardapio</a>
                <br/>
                <a className="btn-success btn" href="/cadastroDeProdutos">Cadastrar ou alterar pedido</a>
                <br/>
                <a className="btn-success btn" href="/cadastroRestaurante">Alterar dados pessoais</a>
                <br/>
                <a className="btn-success btn" ><Token/></a>
                <br/>
                <button className='btn-danger btn' onClick={this.logout}>Logout</button>
                </div>

            </div>
        )
        }

    }

export default dashboard