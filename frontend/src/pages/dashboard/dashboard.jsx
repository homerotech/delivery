import React from "react";
import Header from "../../components/header";
import Cookies from "js-cookie";
import axios from 'axios'
import Token from "./inserirToken";
// clietid e appid
var client_id = "3110758028081820";
var APP_ID = "AlexandreMKT";
var redirect_uri = "http://localhost:300/authpage";
// ^^^^
var linkauth = "";
var g;
///https://auth.mercadopago.com.br/authorization?3110758028081820=AlexandreMKT&response_type=code&platform_id=mp&redirect_uri=https://www.lojasfacil.com
class dashboard extends React.Component {
 

  logout() {
    fetch("http://localhost:5000/api/logout/" + this.props.id, {
      method: "PUT",
    });
    Cookies.remove("session");
    window.location.href = "/";
  }


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      Dados: {},
      Restaurante: {}
    };
    this.now = Date.now();
    this.linkauth =    "https://auth.mercadopago.com.br/authorization?client_id=" +client_id +
    "&response_type=code&platform_id=mp&state=id=" +
    this.props.id +
    "=redirect_uri=" +
    redirect_uri;
    this.logout = this.logout.bind(this);
    
  }


  componentDidMount() {
    fetch("http://localhost:5000/api/cliente/" + this.props.id)
      .then((dados) => dados.json())
      .then((data) => {
        this.setState({
          Dados: data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
      axios.get('http://localhost:5000/api/restaurante/'+this.props.id).then((dt)=>{
        this.setState({
          Restaurante: dt.data
        })
      })
  }

  checkExpire(){
    console.log(this.now)
    console.log(this.state.Restaurante.expires)
    g= new Date(this.state.Restaurante.expires);
      if(g.getTime()<=this.now){
        return <div><span style={{color: "red"}}>EXPIRADA</span><a style={{marginLeft:"10px"}} className="btn-danger btn" href="/Planos">RENOVAR ASSINATURA</a></div>
      }
      else{
        return <span style={{color: "green"}}>ATIVA</span>

      
  }}

  render() {
    return (
      <div>
        <Header />
        <div className="card">
          <h2 style={{ color: "black" }}>Bem vindo {this.state.Dados.nome}</h2>
          <div>
            <h3 style={{color:"black"}}>Status da assinatura: {this.checkExpire()}</h3>
          </div>
          <a className="btn-success btn" href="/cadastroDeCardapio">
            Alterar Catálogo de Produtos
          </a>
          <br />
          <a className="btn-success btn" href="/cadastroDeProdutos">
            Cadastrar ou alterar produto
          </a>
          <br />
          <a className="btn-success btn" href="/cadastroRestaurante">
            Alterar dados pessoais
          </a>
          <br />
          <a className="btn-info btn" href="/acessarCatalogo">
            Acessar Catálogo
          </a>
          <br />
          <a className="btn-danger btn" href="/deletarProdutos">
            Deletar produtos
          </a>
          <br />
          <a className="btn-info btn" href={this.linkauth}>
            Vincular Conta do Mercado Pago
          </a>
          <br />
          <button className="btn-danger btn" onClick={this.logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default dashboard;
