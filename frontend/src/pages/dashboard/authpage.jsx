import React, {useState, useEffect} from "react";
import axios from "axios";
var url = 'https://api.mercadopago.com/oauth/token';
var url_api = 'https://lojasfacil.com:5000'
export default function Checkout(props) {
 const [catalogo, setCatalogo]=useState({})
  var code = new URLSearchParams(props.location.search).get("code");
  var id = new URLSearchParams(props.location.search).get("id");
  console.log(code);
  console.log(id);
  //

  useEffect(() => {
    axios.get(url_api+ '/api/restaurante'+ props.id)
        .then(res => {
            console.log(res.data);
            setCatalogo(res.data);
           
        })
        .catch(err => {
           window.alert=("to cagado")
            
        })
}, []);

  
  var token = "colocar token aqui";
  var uri = "https://lojasfacil.com/authpage";
  //
  var Vtoken = "";
  var Vkey = "";
  var Vrefresh = "";

  var data = {
    client_secret: token,

    ///
    grant_type: "authorization_code",
    code: code,
    redirect_uri: uri,
  };
  async function postData(url , data ) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'accept': 'application/json'
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    let resposta2 = "";
    var resposta = response.json();
    Vtoken = resposta.access_token;
    Vkey = resposta.public_key;
    Vrefresh = resposta.refresh_token;
    var dataV = {
      
        _id: catalogo._id,
        nome: catalogo.nome,
        telefone: catalogo.telefone,
        endereco: catalogo.endereco,
        valeRefeicao: catalogo.valeRefeicao,
        abertura: catalogo.abertura,
        fechamen: catalogo.fechamen,
        desc: catalogo.desc,
        cidade: catalogo.cidade,
        frete: catalogo.frete,
        estado: catalogo.estado,
        CEP: catalogo.CEP,
        url: catalogo.url,
        img: catalogo.img,
        expires: catalogo.expires,
        token: Vtoken,
        chave: Vkey,
        refresh: Vrefresh,
    };
    axios.put(url_api+  "/api/restaurante/" + props.id, {
      
      body: JSON.stringify(dataV),
    })
      .then(function (response) {
       resposta2 = "Vinculado om sucesso"
      })
      .catch(function (error) {
        resposta2 = "Erro ao vincular Token"+error
      });
  }

  postData("https://api.mercadopago.com/oauth/token", data);

  return (
    <div>
      <div className="card">
        <h2 style={{ color: "black" }}> {this.resposta2} </h2>
        <a className="btn btn-info">Voltar para pagina inicial</a>
      </div>
    </div>
  );
}
