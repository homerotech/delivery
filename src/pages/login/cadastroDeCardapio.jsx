import React from 'react';
import Header from '../../components/header'


export default (props)=>{
    return(
        <div style={{color:"black"}} >
            <Header/>
            <br/>
            <form className="container">
            <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nome do estabelecimento</label>
      <input type="name" class="form-control" id="inputEmail4"/>
    </div>
    <form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Logo do restaurante</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
  </div>
  <div class="form-group">
    <label for="inputAddress">Endereço</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua e Numero"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Descrição do restaurante</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">Número</label>
      <input type="tel" class="form-control" id="inputCity" placeholder="55(__) ______ ____"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Estado</label>
      <select id="inputState" class="form-control">
        <option selected>Escolher...</option>
        <option value="AC">Acre</option>
	<option value="AL">Alagoas</option>
	<option value="AP">Amapá</option>
	<option value="AM">Amazonas</option>
	<option value="BA">Bahia</option>
	<option value="CE">Ceará</option>
	<option value="DF">Distrito Federal</option>
	<option value="ES">Espírito Santo</option>
	<option value="GO">Goiás</option>
	<option value="MA">Maranhão</option>
	<option value="MT">Mato Grosso</option>
	<option value="MS">Mato Grosso do Sul</option>
	<option value="MG">Minas Gerais</option>
	<option value="PA">Pará</option>
	<option value="PB">Paraíba</option>
	<option value="PR">Paraná</option>
	<option value="PE">Pernambuco</option>
	<option value="PI">Piauí</option>
	<option value="RJ">Rio de Janeiro</option>
	<option value="RN">Rio Grande do Norte</option>
	<option value="RS">Rio Grande do Sul</option>
	<option value="RO">Rondônia</option>
	<option value="RR">Roraima</option>
	<option value="SC">Santa Catarina</option>
	<option value="SP">São Paulo</option>
	<option value="SE">Sergipe</option>
	<option value="TO">Tocantins</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">CEP</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    
  </div>
  <a href="/cadastroDeProdutos" class="btn btn-primary">Próximo</a>
            </form>
        </div>
    )
}