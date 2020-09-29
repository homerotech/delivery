import React, {useState, useEffect} from 'react';
import logorestaurante from '../../img/logo-restaurante.png';
import CountProvider, {useCount} from '../../Context/Context'
import './catalogo.css';
import Produto from './produtos'
import AlertOpen from './AlertOpen';
import AlertClose from './AlertClose';

import {Link} from 'react-router-dom'

import axios from 'axios'

import logo3 from '../../img/download (2).jpeg';

import dateStore from './dataStore';
import date from './datacatalog';

import RoomIcon from '@material-ui/icons/Room';
import Pagamento from './pagamentosNaHora';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default (props)=>{

  const {produtos, setProdutos} = useCount()

    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');




    const [dados, setDados]=useState({
        _id: '',
        nome: '',
        telefone: '',
        abertura: '',
        fechamen : '',
        endereco: '',
        valeRefeicao: '',
        desc: '',
        cidade: '',
        frete:'',
        token: '',
        estado: '',
        CEP: '',
    })

    useEffect(() => {
        axios.get('http://localhost:5000/api/restaurante/'+props.match.params.id)
            .then(res => {
                setDados(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);












 
var pago = produtos.map((elistop)=>{
  return(
    <li class="list-group-item d-flex justify-content-between align-items-center" key={elistop}>
    {elistop[0]}
  <span class="badge badge-primary badge-pill">R$ {elistop[1]}</span></li>
  )
})

  const lis = date.map((date)=>{
    return(
      //Concertando codigos, tem de colocar a imagem no objeto
      <Produto img={logo3} title={date.title} preco={date.preco} codigo={date.codigo} click={()=>{
        setProdutos([...produtos, [date.title, date.preco, date.codigo]]);
      }}/>
    );
  })




//tem token?

const temToken = dados.token  != undefined;
console.log(dados.token)
//pagamento na hora

const pag = dateStore.map((dateStore)=>{
   
  

    if(dados.valeRefeicao === true){
     
      return(
        
        <Pagamento/>
      )
    }
  })
  //aberto ou fechado component
  var d = new Date();
  var now = d.getHours() + "." + d.getMinutes();
  function aberto(){
    
    if(now < dados.abertura || now > dados.fechamen ){
    return(
        <AlertClose/>
    )

}else {
return(
    <AlertOpen/>
)}}
//botao do zap

var WhatsApp = dateStore.map((zap)=>{
  return(
   <a className="btn btn-outline-success botaozap"   href={"https://api.whatsapp.com/send?phone="+ zap.num +"&text=%20PEDIDO%20LOJAS%20FACIL"+produtos.map((elis)=>{
    return(
     ` ${elis[1]} %20 ${elis[0]}%0a`
    )})  
    }><WhatsAppIcon /></a>
   
  )
});





    return(
     <CountProvider>
        <div>
        {aberto(dados.aberto, dados.fechamen)}      
            <div class="jumbotron p-0">


<div class="view overlay rounded-top">
  <img src={logorestaurante} class="img-fluid logoRestaurante" alt="Sample image"/>
  
</div>


<div class="textoAtras card-body text-center mb-3">


    <h3 class="card-title h3 my-4"><strong>{dados.nome}</strong></h3>

    <p class="card-text py-2">{dados.desc}</p>
    <small><RoomIcon/>{dados.endereco}</small>
</div>

<div>

</div>
<hr/>
<div>
  {lis}         
</div>
{pag}
</div>
<h5 style={{color: "#000b23"}}>Pedidos</h5>
<ul class="list-group" style={{color: "#000b23"}}>
  {pago}
</ul>
<br/>
{
  temToken? (<Link to={{
    pathname: "/Checkout",
    data: produtos // your data array of objects
  }}
><button type="button" class="btn btn-success btn-lg btn-block" onClick={ ()=>{setProdutos([...produtos, ['taxa' ,0.1,  4]])}} >Realizar pedido</button></Link>) : (<button type="button" class="btn btn-info btn-lg btn-block" >Este restaurante não oferece pagamento online</button>)


}
<br/>
    <div className><p style={{color:"black"}}>
      <br></br>
      <h5>Será acrescido R$0,10 por pedido</h5>
      
      Qualquer alteração fale direto com o WhatsApp do fornecedor.</p>{WhatsApp}</div>
<br/>
<br/>
        </div></CountProvider>
    )
}