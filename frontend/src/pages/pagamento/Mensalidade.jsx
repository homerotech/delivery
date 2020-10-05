import React, { Component } from 'react';
import './Mensalidade.css';
import Header from '../../components/header'
import { CountProvider, useCount } from "../../Context/Context";



class Mensalidade extends Component {

  constructor(props){
    super(props);

    this.setPaymentMethodInfo = this.setPaymentMethodInfo.bind(this);
    this.guessingPaymentMethod = this.guessingPaymentMethod.bind(this);
    this.sdkResponseHandler = this.sdkResponseHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      submit: false,
      plano: []
    };
  }

  /**
   * Set credentials and call initial methods
   */


  componentDidMount() {

    window.Mercadopago.setPublishableKey('TEST-42140817-bcf9-4d00-8a19-f6dd8b08f9e3');
    window.Mercadopago.getIdentificationTypes();

  }

  /**
   * This method is executed when credit card input has more than 6 characters
   * Then calls getPaymentMethod function of the MercadoPago SDK
   *
   * @param {Object} event HTML event
   */
  guessingPaymentMethod(event) {
    const bin = event.currentTarget.value;

    if (bin.length >= 6) {
      window.Mercadopago.getPaymentMethod({
        "bin": bin.substring(0, 6),
      }, this.setPaymentMethodInfo);
    }
  }

  /**
   * This method is going to be the callback one from getPaymentMethod of the MercadoPago Javascript SDK
   * Is going to be creating a hidden input with the paymentMethodId obtain from the SDK
   *
   * @param {Number} status HTTP status code
   * @param {Object} response API Call response
   */
  setPaymentMethodInfo(status, response) {
    if (status === 200) {
      const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

      if (paymentMethodElement) {
        paymentMethodElement.value = response[0].id;
      } else {
        const form = document.querySelector('#pay');
        const input = document.createElement('input');

        input.setattribute('name', 'paymentMethodId');
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', response[0].id);

        form.appendChild(input);
      }
    } else {
      alert(`Payment Method not Found`);
    }
  };

  /**
   * This method is going to be called when the form is submited
   * Is going to create the card token using the MercadoPago SDK
   *
   * @param {object} event React event
   */
  onSubmit(event) {
    event.preventDefault();

    if (!this.state.submit) {
      const form = document.getElementsByTagName('form')[0];
      window.Mercadopago.createToken(form, this.sdkResponseHandler);
    }
  }

  /**
   * This method is going to handle the createToken call made by the SDK
   * If it is successful is going to add a hidden input with the card token value
   *
   * @param {Number} status HTTP status code
   * @param {Object} response The response from SDK
   */
  sdkResponseHandler(status, response) {
    if (status !== 200 && status !== 201) {
      alert("verify filled data");

      this.setState({
        submit: false,
      });
    } else {
      this.setState({
        submit: true,
      });

      const form = document.querySelector('#pay');
      const card = document.createElement('input');

      card.setAttribute('name', 'token');
      card.setAttribute('type', 'hidden');
      card.setAttribute('value', response.id);

      form.appendChild(card);
      form.submit();
    }
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <h1 style={{color: 'black'}}>Checkout</h1>
        <form action="http://localhost:5000/pay" method="post" id="pay" name="pay" onSubmit={this.onSubmit}>
          <ul>
          <select class="form-control form-control-lg" value={this.state.plano} onChange={(e) => this.setState({plano: e.target.value})}>
                  <option value={[["Plano Trimestral", 49.9, '3']]}>Plano Trimestral</option>
                  <option value={[["Plano Semestral", 89.9, '6']]}>Plano Semestral</option>
                  <option value={[["Plano Anual", 169.9, '12']]}>Plano Anual</option>
                  </select>
          </ul>
          {console.log(this.state.plano)}
          <fieldset>
            
            <ul>
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
            <input type="submit" value="Do Payment" />
          </fieldset>
        </form>
      </div>
    )

  };
 
}

export default Mensalidade;