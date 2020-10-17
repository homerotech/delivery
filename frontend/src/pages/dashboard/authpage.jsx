import React from "react";
import axios from "axios";

export default function Checkout(props) {
  var code = new URLSearchParams(props.location.search).get("code");
  var id = new URLSearchParams(props.location.search).get("id");
  console.log(code);
  console.log(id);
  //
  var token = "colocar token aqui";
  var uri = "http://localhost:3000/authpage";
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
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json",
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    
    var resposta = response.json();
    Vtoken = resposta.access_token;
    Vkey = resposta.public_key;
    Vrefresh = resposta.refresh_token;
    var dataV = {
      token: Vtoken,
      chave: Vkey,
      refresh: Vrefresh,
    };
    axios("http://localhost:5000/api/restaurante" + id, {
      method: "PUT",
      body: JSON.stringify(dataV),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("caraio" + error);
      });
  }

  postData("https://api.mercadopago.com/oauth/token", data);

  return (
    <div>
      <div className="card">
        <h2 style={{ color: "black" }}> Vinculado com Sucesso </h2>
      </div>
    </div>
  );
}
