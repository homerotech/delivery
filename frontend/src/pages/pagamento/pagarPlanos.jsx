import React, { Component } from 'react';
import './Mensalidade.css';
import Header from '../../components/header';
import {handlePayment} from "./handlePayment" 
import {ScriptTag} from "react-script-tag"

class pagarPlanos extends Component {

  constructor(props){
    super(props);

    this.state = {
      submit: false,
      id: this.props.id,
      plano: 0
    };
  }

  

  componentDidMount(){
    const mercadopago = require("mercadopago")

    let preference ={
        items:[
            {
                title: 'Plano Trimestral',
                unit_price:49.90,
                quantity:1,
            }
        ]
    }

    mercadopago.configure({
        access_token: "TEST-2745994227570117-090419-a1649a09cc2897951cf090fc28a08502-166811747",
        sandbox:true
    });

    mercadopago.preferences.create(preference)
    .then(function(response){
        global.id = response.body.id;
        const script = document.createElement("script");
        script.src = "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
        script.setAttribute('data-preference-id', global.id);
        script.id = "checkout-button";
        script.async = true;
        document.body.appendChild(script);
    }).catch(function(error){
    console.log(error);
    });

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <h1 style={{color: 'black'}}>Checkout</h1>
        <form method="post" id="pay" name="pay">
          <ul>
          <select    id="plano"
                  name="plano" class="form-control form-control-lg" value={this.state.plano} onChange={(e) => this.setState({plano: e.target.value})}>
                  <option value={'plano1'}>Plano Trimestral</option>
                  <option value={'plano2'}>Plano Semestral</option>
                  <option value={'plano3'}>Plano Anual</option>
                  </select>
          </ul>
          {console.log(this.state.plano)}
          <fieldset>
            
            <ul>
            <li>
                <label >
                  ID Restaurante
                </label>
                <input
                  
                  name="id"
                  
                  value={this.state.id}
                  type="number"
                  placeholder="sua ID"
                />
              </li>
              <li>
                <label htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  defaultValue="test_user_71425066@testuser.com"
                  type="email"
                  placeholder="your email"
                />
              </li>
              <li>
                <label htmlFor="cardNumber">
                  Número do Cartão:
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  data-checkout="cardNumber"
                  placeholder="4509953566233704"
                  autoComplete="off"
                  onChange={this.guessingPaymentMethod}
                  maxLength={16}
                />
              </li>
              <li>
                <label htmlFor="securityCode">
                  Código de segurança:
                </label>
                <input
                  type="text"
                  id="securityCode"
                  data-checkout="securityCode"
                  placeholder="123"
                  autoComplete="off"
                />
              </li>
              <li>
                <label htmlFor="cardExpirationMonth">
                  Mês de expiração:
                </label>
                <input
                  type="text"
                  id="cardExpirationMonth"
                  data-checkout="cardExpirationMonth"
                  placeholder="12"
                  autoComplete="off" />
              </li>
              <li>
                <label htmlFor="cardExpirationYear">
                  Ano Expiração:
                </label>
                <input
                  type="text"
                  id="cardExpirationYear"
                  data-checkout="cardExpirationYear"
                  placeholder="29"
                  autoComplete="off"
                />
              </li>
              <li>
                <label
                  htmlFor="cardholderName">
                  Nome do Titúlar do Cartão:
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  data-checkout="cardholderName"
                  placeholder="APRO"
                />
              </li>
              <li>
                <label htmlFor="docType">
                  Tipo de documento:
                </label>
                <select id="docType" data-checkout="docType"></select>
              </li>
              <li>
                <label htmlFor="docNumber">Número do documento:</label>
                <input
                  type="text"
                  id="docNumber"
                  data-checkout="docNumber"
                  placeholder="12345678"
                />
              </li>
            </ul>
            <input
              type="hidden"
              name="paymentMethodId"
            />
          </fieldset>
        </form>
      </div>
    )

  };
 
}

export default pagarPlanos;