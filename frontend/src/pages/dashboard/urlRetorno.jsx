import React from "react";
import Header from "../../components/header";
import Cookies from "js-cookie";
import Token from "./inserirToken";
// clietid e appid

///https://auth.mercadopago.com.br/authorization?3110758028081820=AlexandreMKT&response_type=code&platform_id=mp&redirect_uri=https://www.lojasfacil.com
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("code");
var d = url.searchParams.get("id");
class dashboard extends React.Component {

  

    componentDidMount(){
        fetch('http://localhost:5000/api/restaurante/'+this.props.id).then(
          res=>{
            if (res.status===404) {
              this.setState({
                isUpdate: false
              })
            }
            else{
              res.json().then(
              dados => {
                console.log(dados)
                this.setState({
                _id:this.props.id,
                isLoading: false,
                nome:dados.nome,
                desc:dados.desc,
                endereco:dados.endereco,
                CEP:dados.CEP,
                abertura: dados.abertura,
                fechamen: dados.fechamen,
                telefone:dados.telefone,
                url: dados.url,
                cidade:dados.cidade,
                token:dados.token,
                frete: dados.frete,
                estado:dados.estado,
                valeRefeicao: dados.valeRefeicao,
                isUpdate: true
              })}
              )
            }
          }
        )
      }
    


      constructor(props){
        super(props)
        this.state={
          _id:"",
          isLoading: true,
          nome:"",
          desc:"",
          endereco:"",
          CEP:null,
          telefone:null,
          cidade:"",
          frete:"",
          estado:"",
          token: "",
          valeRefeicao: null,
          url:"",
          isUpdate: true
        }
        this.cadastrarProduto = this.cadastrarProduto.bind(this);



    }


      cadastrarProduto(){

        
        var data = { 
          _id:this.state.id,
          nome:this.state.nome,
          telefone:this.state.telefone,
          endereco:this.state.endereco,
          valeRefeicao: this.state.valeRefeicao,
          abertura: this.state.abertura,
          fechamen: this.state.fechamen,
          desc:this.state.desc,
          cidade:this.state.cidade,
          frete:this.state.frete,
          estado:this.state.estado,
          token: c,
          CEP:this.state.CEP,
          url:this.state.url,
          img: this.props.id
        }
      
    
        data = JSON.stringify(data)
    
        console.log(data)
    
    
    
  
     
       
          fetch('http://localhost:5000/api/restaurante/'+this.props.id,{
            method:"PUT",
            headers: {'Content-Type': 'application/json'},
            body:data
        }).then(alert('Id Cadastrada com sucesso'))
        .catch(err => alert(err))
        window.location.href='/dashboard'
        
    
    }



  render() {
    return (
      <div>
        <Header />
        <div className="card">
          <h2 style={{ color: "black" }}>Estamos processando seu Token</h2>
          <button className="btn btn-success" onClick={this.cadastrarProduto}><a href="/dashboard">Finalizar</a></button>
        {  console.log(this.state)}
         {c}{d}
        </div>
      </div>
    );
  }
}

export default dashboard;