import React from 'react';
import Header from '../../components/header'


export default (props)=>{
    return(
        <div>
            <Header/>
            <h2 style={{color:"black"}}><strong>Cadastro de produtos</strong></h2>
            <form style={{color:"black"}} className="container">
                <div class="form-group">
                <label for="inputAddress"><strong>Nome do produto</strong></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Ex.: Calça jeans"/>
                </div>
                <div class="form-group">
                <label for="exampleFormControlFile1"><strong>Imagem do produto</strong></label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <div class="form-group">
                <label for="inputAddress"><strong>Descrição do produto</strong></label>
                <input type="text" class="form-control" id="inputAddress" placeholder="max 255 caracteres"/>
                </div>
                <div class="form-group">
                <label for="inputAddress"><strong>Preço</strong></label>
                <input type="number" class="form-control" id="inputAddress" placeholder="2.55"/>
                </div>
                
</form>
        </div>
    )
}