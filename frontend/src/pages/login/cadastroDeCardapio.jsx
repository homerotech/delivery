import React from 'react';
import Header from '../../components/header'

class cadastroCardapio extends React.Component {
  

  

  componentDidMount(){
    fetch('http://localhost:5000/api/restaurante'+this.props.id).then(
      res=>{
        if (res.status===404) {
        }
        else{
          res.json()
        }
      }
    )
  }

  
  cadastrarProduto(){

  }

  constructor(props){
    super(props)
    this.state={
      isLoading: true,
      nome:"",
      desc:"",
      endereco:"",
      CEP:null,
      telefone:null,
      cidade:"",
      token:"",
      Estado:"",
      valeRefeicao: null,
      isUpdate: false
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

    console.log(value)
}

  cadastrarProduto(){
    var res = window.confirm("Tem certeza que deseja alterar este produto?")
    if (res === true) { 
    const files = this.state.img
    if(files !== null){
    const formData = new FormData()
    formData.append('file',files)
    fetch('http://localhost:5000/api/upload/del/'+this.state.id,{
        method:"DELETE"
    });
    fetch('http://localhost:5000/api/upload/'+this.state.id,{
        method:"POST",
        body:formData
    }).then( this.setState({
        img_link: this.state.id+'.png'
    }))
        }
    var data = { 
        _id: this.state.id,
        nome: this.state.nome,
        desc: this.state.desc,
        ref: this.state.ref,
        categoria: this.state.categoria,
        valor: this.state.valor,
        qtd: this.state.qtd,
        img: this.state.img_link,
    }

    data = JSON.stringify(data)
    console.log(data)
    fetch('http://localhost:5000/api/produto/'+this.state.id,{
        method:"PUT",
        headers: {'Content-Type': 'application/json'},
        body:data
    }).then(alert('Produto alterado com sucesso'))
    .catch(err => alert(err))
    window.location.href = "/Produtos";
      }
    }


  render(){

    return(
      <div className="" style={{backgroundColor:"#f3f3f3", color: "black"}} >
          <Header/>
          <br/>
          <h3>Cadastrar ou alterar cardapio</h3>
          <form className="container">
          <div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4"><h5>Nome do estabelecimento</h5></label>
    <input type="name" class="form-control" id="inputEmail4"/>
  </div>
  <form>
<div class="form-group">
  <label for="exampleFormControlFile1"><h5>Logo do restaurante</h5></label>
  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
</div>
</form>
<div class="form-group col-md-12">
    <label for="inputState"><h5>Aceita Vale alimentação</h5></label>
    </div>
    <div className="justify-content-center" style={{width:"100%",display:"flex"}}>
    <input type="radio" name="joke" value="true" /> Sim
    <input type="radio" name="joke" value="false" /> Não
    </div>
    </div>
<div class="form-group">
  <label for="inputAddress"><h5>Endereço</h5></label>
  <input type="text" class="form-control" id="inputAddress" placeholder="Rua e Numero"/>
</div>
<div class="form-group">
  <label for="inputAddress2"><h5>Descrição do restaurante</h5></label>
  <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
</div>
<div class="form-row">
<div class="form-group col-md-6">
    <label for="inputCity"><h5>Token mercado pago</h5></label>
    <input type="text" class="form-control" id="inputToken"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCity"><h5>Cidade</h5></label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCity"><h5>Número</h5></label>
    <input type="tel" class="form-control" id="inputCity" placeholder="55(__) ______ ____"/>
  </div>
  <div class="form-group col-md-4">
    <label for="inputState"><h5>Estado</h5></label>
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
    <label for="inputZip"><h5>CEP</h5></label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
</div>
<div class="form-group">
  
</div>
<a href="/cadastroDeProdutos" class="btn btn-primary">Finalizar</a>
<br/>
          </form>
          <br/><br/><br/>
      </div>
  )
  }
}

export default cadastroCardapio