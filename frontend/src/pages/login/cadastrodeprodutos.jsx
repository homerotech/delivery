import React, { useState, useEffect } from 'react';
import Header from '../../components/header'
import './cadastro.css'
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default (props)=>{
    const [value, setValue] = React.useState('cadastro');
    



    const [customerSignUp, setCustomerSignUp] = useState(
        { nome: '', img: '', descricao: '', preco: ''}
    );

    const handleChange = (event) => {
        setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios('http://localhost:5000/api/produto', {
            method: 'POST',
            body: JSON.stringify(customerSignUp)
        })
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log("caraio" +error)
          }) 




        }







console.log(customerSignUp)

    const handleChange1 = (event) => {
      setValue(event.target.value);
      
    };
 
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
    return(
        <div >
            <Header/>
            <br/>
            <div className="container" style={{backgroundColor:"#f3f3f3"}}>
            <h2 style={{color:"black"}}><strong>Cadastro de produtos</strong></h2>
          
            <FormControl component="fieldset" style={{color:"black"}}>
          
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange1}>
            <FormControlLabel value="cadastro" control={<Radio />} label="Cadastrar produto" />
            <FormControlLabel value="alterar" control={<Radio />} label="Alterar produto" />
            </RadioGroup>
            </FormControl>
            <form style={{color:"black"}} className="container" method='POST' onSubmit={handleSubmit}>
                {CadastroOuAlteracao(value)}
                <div class="form-group">
                <label for="inputAddress"><strong>Nome do produto</strong></label>
                <input type="text" name="nome" value={customerSignUp.nome} onChange={handleChange} required class="form-control" id="inputAddress" placeholder="Ex.: Calça jeans"/>
                </div>
                <br/><br/>
                <div class="form-group">
                <label for="exampleFormControlFile1"><strong>Imagem do produto</strong></label>
                <input type="file" class="form-control-file" name="img" value={customerSignUp.img} onChange={handleChange} id="exampleFormControlFile1"/>
                </div>
                <br/><br/>
                <div class="form-group">
                <label for="inputAddress"><strong>Descrição do produto</strong></label>
                <input type="text" class="form-control" name="descricao" value={customerSignUp.descricao} onChange={handleChange} required id="inputAddress" placeholder="max 255 caracteres"/>
                </div>
                <div class="form-group">
                <label for="inputAddress"><strong>Preço</strong></label>
                <input type="number" name="preco" value={customerSignUp.preco} onChange={handleChange} required class="form-control" id="inputAddress" placeholder="2.55"/>
                <div className="botoesfinais">
                <button href="/cadastroDeProdutos" type="send" class="btn btn-primary">Cadastrar outro produto</button>
                <a href="/Dashboard" type="submit" class="btn btn-primary">Finalizar</a>
                </div>
                </div>
              <br/>  
</form>
</div>
<br/><br/><br/>
        </div>
    )
}