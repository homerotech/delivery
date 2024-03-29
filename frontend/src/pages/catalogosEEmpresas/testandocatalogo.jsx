
import React, {useState, useEffect} from 'react';
import Header from '../../components/header'
import CountProvider, {useCount} from '../../Context/Context'
import './catalogo.css';
import Produto from './produtos'
import AlertOpen from './AlertOpen';
import AlertClose from './AlertClose';

import {Link} from 'react-router-dom'

import axios from 'axios'



import RoomIcon from '@material-ui/icons/Room';
import Pagamento from './pagamentosNaHora';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default (props)=>{ 

  const {produtos, setProdutos} = useCount()

    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

const [showProducts, setShowProducts] = useState([])


    const [dados, setDados]=useState([])


    // const []
    useEffect(() => {
        axios.get('http://localhost:5000/api/produto/find/'+ props.match.params.url)
            .then(res => {
                console.log(res.data);
                setShowProducts(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);
console.log(showProducts)
    useEffect(() => {
      axios.get('http://localhost:5000/api/restaurante/find/'+ props.match.params.url)
          .then(res => {
              console.log(res.data);
              setDados(res.data);
              setLoad(true);
          })
          .catch(err => {
              setError(err.message);
              setLoad(true)
          })
  }, []);




var t =dados.map(it=>it.expires)
var g =new Date(t)

var temporizante = g.getTime() >= Date.now()

console.log(t)

const handleDelete = (chipToDelete) => () => {
  setProdutos((produtos) => produtos.filter((produtos) => produtos !== chipToDelete));
};
var pago = produtos.map((elistop)=>{
  return(
    <li class="list-group-item d-flex justify-content-between align-items-center" key={elistop}>
    {elistop[0]}
  <span class="badge badge-primary badge-pill align-items-left">R$ {elistop[1]} <a style={{color: 'black'}} onClick={handleDelete(elistop)}>x</a></span>  </li>
  )
})


  const lis = showProducts.map((date) => {
    return (
      //Concertando codigos, tem de colocar a imagem no objeto
      <Produto
        img={date.img}
        title={date.nome}
        descricao={date.descricao}
        preco={date.preco}
        codigo={date._id}
        click={() => {
          setProdutos([...produtos, [date.nome, date.preco, date._id]]);
        }}
      />
    );
  });


  //pagamento na hora

  const pag = () => {
    if (dados.valeRefeicao === true) {
      return <Pagamento />;
    }
  };
  //aberto ou fechado component
  var d = new Date();
  var now = d.getHours() + "." + d.getMinutes();

  function aberto() {
    if (now < dados.abertura || now > dados.fechamen) {
      return <AlertClose />;
    } else {
      return <AlertOpen />;
    }
  }
  //botao do zap

  var WhatsApp =(dados, produtos) => {
    return (
      <a
        className="btn btn-outline-success botaozap"
        href={
          "https://api.whatsapp.com/send?phone=" +
          dados.map((i2)=>i2.telefone) +
          "&text=%20PEDIDO%20LOJAS%20FACIL%0a" +
          produtos.map((elis) => {
            return ` ${elis[1]} %20 ${elis[0]},%0a`;
          })
        }
      >
        <WhatsAppIcon />
      </a>
    );
  };
  var WhatsApp1 =(dados, produtos) => {
    return (
      <a
        className="btn btn-info col-md-12"
        href={
          "https://api.whatsapp.com/send?phone=" +
          dados.map((i2)=>i2.telefone) +
          "&text=%20PEDIDO%20LOJAS%20FACIL%0a" +
          produtos.map((elis) => {
            return `  %20 ${elis[0]}%20 R$ ${elis[1]},%0a`;
          })
        }
      >
        Pagamento em dinheiro
      </a>
    );
  };

if(temporizante === true){
  return (
    <CountProvider>
      <div>
        {aberto(dados.aberto, dados.fechamen)}
        <div class="jumbotron p-0">
          <div class="view overlay rounded-top">
          {/* require('../../uploads/restaurantes/'+dados.img+'.png') */}
            <img
              src={process.env.PUBLIC_URL + "/uploads/"+dados.map((i3)=>i3._id)[0] +".png"}
              class="img-fluid logoRestaurante"
              alt="Sample image"
            />
          </div>

          <div class="textoAtras card-body text-center mb-3">
            <h3 class="card-title h3 my-4">
              <strong>{dados.map((i3)=>i3.nome)}</strong>
            </h3>

            <p class="card-text py-2">{dados.map((i2)=>i2.desc)}</p>
            <small>
              <RoomIcon />
              {dados.map((i2)=>i2.endereco)}
            </small>
          </div>

          <div></div>
          <hr />
          <div>{lis}</div>
          {pag}
        </div>
        <h5 style={{ color: "#000b23" }}>Pedidos</h5>
        <ul class="list-group" style={{ color: "#000b23" }}>
          {pago}
        </ul>
        <br />




        <button class="btn btn-success col-md-12 btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Realizar pedido
  </button>
  <div class="dropdown-menu col-md-12">
    <a class="dropdown-item">
    <Link to={{
    pathname: "/Checkout/",
    data: produtos // your data array of objects
  }}
><button type="button" class="btn btn-success btn-lg btn-block" click={ ()=>{useCount(produtos)}} >Pagamento em cartão</button></Link>
    </a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item">
    {  WhatsApp1(dados, produtos)}
</a>
  </div>
         
        <div className>
          <p style={{ color: "black" }}>
            <br></br>
            <h5>Será acrescido R$0,50 por pedido no cartão</h5>
            Qualquer alteração fale direto com o WhatsApp do fornecedor.
          </p>
          {WhatsApp(dados, produtos)}
        </div>
        <br />
        <br />
      </div>
    </CountProvider>
  );}
  else{
    return(<div>
          <Header/>

<h5 style={{ color: "black" }}>Esta URL não está no ar ou Não foi cadastrada</h5>

    </div>)
  }
};

