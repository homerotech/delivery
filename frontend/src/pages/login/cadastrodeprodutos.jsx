import React, { useState, useEffect } from 'react';
import Header from '../../components/header'
import './cadastro.css'
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
var cat={};
class cadastroDeProdutos extends React.Component {
    // const [value, setValue] = React.useState('cadastro');

    
  

  componentDidMount(){
    fetch('http://localhost:5000/api/restaurante/'+this.props.id).then(
        res=>{
          if (res.status===404) {
            this.catalogo({
              isUpdate: false
            })
          }
          else{
            res.json().then(
            dados => {
              console.log(dados)
              this.setState({
              
              cardapio: dados.url,
 
              isUpdate: true
            })}
            )
          }
        }
      )
    }
  

  
  cadastrarProduto(){

  }

  constructor(props){
    super(props)
    this.cat = {}
    this.state={
      _id:"",
      isLoading: true,
      nome:"",
      descricao:"",
      preco:"",
      img: "",
      cardapio: "",
      isUpdate: true
    }
    this.catalogo={
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
        valeRefeicao: null,
        url:"",
        isUpdate: true
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.cadastrarProduto = this.cadastrarProduto.bind(this);
  }

  handleFileChange(event){
    const files = event.target.files[0]
    this.setState({
        img: files
    })
}

handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    });

}
    dadosCadastro;
  cadastrarProduto(){

        
    var data = { 
      _id:this.state.id,
      nome:this.state.nome,
      preco: this.state.preco,
      img: this.state._id + this.props.url,
      descricao: this.props.descricao,
      url: this.props.url
    }

//     _id: Number,
//     nome: String,
//     preco: Number,
//     img: String,
//     descricao: String,
//     cardapio: String

// }, {
//     timestamps: true,
//     collection: 'Produto'
// });

    data = JSON.stringify(this.state)

      const files = this.state.img;
      if(files !== null){
      const formData = new FormData()
      formData.append('file',files)
    console.log(data)



    if(!this.state.isUpdate){
    
    //   if(files !== null){
    //     const formData = new FormData()
    //     formData.append('file',files)
    //     fetch('http://localhost:5000/api/upload/produtos/'+this.props.id+this.props.catalogo,{
    //         method:"POST",
    //         body:formData
    //     });
    // }

      fetch('http://localhost:5000/api/restaurante',{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:data
    }).then(alert('Catálogo Cadastrado com sucesso'))
    .catch(err => alert(err))
    window.location.href='/Planos'
    }
    else{
 
    }
  }}




  

    handleSubmit = (e) => {
        console.log(JSON.stringify(this.state))
        axios.post('http://localhost:5000/api/produto/'+this.state.catalogo, JSON.stringify(this.state),{
            headers: {
                'Content-Type': 'application/json'
            },
        })
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log("caraio" +error)
          }) 
          window.location.href='/dashboard'



        }
       

 
     

render(){






    return(
        <div >
            <Header/>
            <br/>
            <div className="container" style={{backgroundColor:"#f3f3f3"}}>
            <h2 style={{color:"black"}}><strong>Cadastro de produtos</strong></h2>
          
           {    console.log(this.state)}
            <form style={{color:"black"}} className="container" method='POST' onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="inputAddress"><strong>Código do produto</strong></label>
                <input type="number" name="_id" class="form-control" id="inputAddress" value={this.state._id} onChange={this.handleChange} placeholder="Números que não foram utilizados"/>
                
                </div>
                <div class="form-group">
                <label for="inputAddress"><strong>Nome do produto</strong></label>
                <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} required class="form-control" id="inputAddress" placeholder="Ex.: Calça jeans"/>
                </div>
                <br/><br/>
                <div class="form-group">
                <label for="exampleFormControlFile1"><strong>Imagem do produto</strong></label>
                <input type="file" class="form-control-file" name="img" value={this.state.img} onChange={this.handleFileChange} id="exampleFormControlFile1"/>
                </div>
                <br/><br/>
                <div class="form-group">
                <label for="inputAddress"><strong>Descrição do produto</strong></label>
                <input type="text" class="form-control" name="descricao" value={this.state.descricao} onChange={this.handleChange} required id="inputAddress" placeholder="max 255 caracteres"/>
                </div>
                <div class="form-group">
                <label for="inputAddress"><strong>Preço</strong></label>
                <input type="number" name="preco" value={this.state.preco} onChange={this.handleChange} required class="form-control" id="inputAddress" placeholder="2.55"/>
                <div className="botoesfinais">
                <button href="/cadastroDeProdutos" type="send" class="btn btn-primary">Cadastrar outro produto</button>
                <Button class="btn btn-primary" onClick={this.handleSubmit}>Finalizar</Button>
                </div>
                </div>
              <br/>  
</form>
</div>
<br/><br/><br/>
        </div>
    )
    function CadastroOuAlteracao(value){
        if (value!='cadastro'){
            return(
                <div class="form-group">
                <label for="inputAddress"><strong>id do produto que deseja alterar</strong></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Ex.: Calça jeans"/>
                {console.log(value)}
                </div>
               
            )
        }
    }
}

}
export default cadastroDeProdutos