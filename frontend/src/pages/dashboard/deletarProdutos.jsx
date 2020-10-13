import React, { useState, useEffect } from 'react';
import Header from '../../components/header'

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

  

  constructor(props){
    super(props)

    this.state={

        id: '',
        catalogo: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    });

}



  

    handleSubmit = (e) => {
        
        console.log(JSON.stringify(this.state))
        axios.delete('http://localhost:5000/api/produto/'+this.state.id)
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
                <label for="inputAddress"><strong>Código do produto que deseja deletar</strong></label>
                <input type="number" name="id" class="form-control" id="inputAddress" value={this.state.id} onChange={this.handleChange} placeholder=""/>
                
                </div>
               
                <Button class="btn btn-danger" onClick={this.handleSubmit}><a href="/dashboard" style={{color: "white"}}>Deletar</a></Button>
</form>
                </div>
              <br/>  


        </div>
    )
 
}

}
export default cadastroDeProdutos