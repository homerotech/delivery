import React from 'react';
import Header from '../../components/header'
import './cadastro.css'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default (props)=>{
    const [value, setValue] = React.useState('cadastro');
    
    const handleChange = (event) => {
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
          
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="cadastro" control={<Radio />} label="Cadastrar produto" />
            <FormControlLabel value="alterar" control={<Radio />} label="Alterar produto" />
            </RadioGroup>
            </FormControl>
            <form style={{color:"black"}} className="container">
                {CadastroOuAlteracao(value)}
                <div class="form-group">
                <label for="inputAddress"><strong>Nome do produto</strong></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Ex.: Calça jeans"/>
                </div>
                <br/><br/>
                <div class="form-group">
                <label for="exampleFormControlFile1"><strong>Imagem do produto</strong></label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <br/><br/>
                <div class="form-group">
                <label for="inputAddress"><strong>Descrição do produto</strong></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="max 255 caracteres"/>
                </div>
                <div class="form-group">
                <label for="inputAddress"><strong>Preço</strong></label>
                <input type="number" class="form-control" id="inputAddress" placeholder="2.55"/>
                <div className="botoesfinais">
                <a href="/cadastroDeProdutos" class="btn btn-primary">Cadastrar outro produto</a>
                <a href="/checkout" class="btn btn-primary">Finalizar</a>
                </div>
                </div>
              <br/>  
</form>
</div>
<br/><br/><br/>
        </div>
    )
}