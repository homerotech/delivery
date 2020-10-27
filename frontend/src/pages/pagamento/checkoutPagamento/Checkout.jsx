import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { CountProvider, useCount } from "../../../Context/Context";
import produtos from "../../catalogosEEmpresas/produtos";
import axios from "axios";

//name={nome} sobrenome={sobrenome} endereco={adres} cidade={cidade} cep={CEP} teln={tel_n}
//nomecard={nome_c} numero={numcard} dataven={expmes} datavenca={expano} produtos={produtos}
// var twilioprodutos = produtos.map((xan)=>{return(xan[1])})
var twilioText = `NOVO PEDIDO REALIZADO POR LOJASFACIL:
        ${nome} ${sobrenome} 
        telefone: ${tel_n};
        endereco: ${adres};
        pedido: ${produtos}
`;


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Dados do Cliente", "Dados do pagamento", "Revisão do pedido"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return (
        <Review
          name={nome}
          sobrenome={sobrenome}
          endereco={adres}
          cidade={cidade}
          cep={CEP}
          teln={tel_n}
          nomecard={nome_c}
          numero={numcard}
          dataven={expmes}
          datavenca={expano}
          produtos={produtos}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

// var myTotal;

var nome;
var sobrenome;
var adres;
var cidade;
var CEP;
var tel_n;

var nome_c;
var CA;
var numcard;
var datavenc;
var expmes;
var expano;
var CVV;
var email;
var doccpf;

function testeNullInput(step) {
  var returnStatement = true;
  if (step == 0) {
    nome = document.getElementById("firstName").value;
    sobrenome = document.getElementById("lastName").value;
    adres = document.getElementById("address1").value;
    cidade = document.getElementById("city").value;
    CEP = document.getElementById("zip").value;
    tel_n = document.getElementById("cel").value;
    if (nome.length == 0) {
      returnStatement = false;
    }
    if (sobrenome.length == 0) {
      returnStatement = false;
    }
    if (adres.length == 0) {
      returnStatement = false;
    }
    if (cidade.length == 0) {
      returnStatement = false;
    }
    if (CEP.length == 0) {
      returnStatement = false;
    }
    if (tel_n.length == 0) {
      returnStatement = false;
    }
  }
  if (step == 1) {
    nome_c = document.getElementById("cardName").value;
    numcard = document.getElementById("cardNumber1").value;
    expmes = document.getElementById("expmes").value;
    expano = document.getElementById("expano").value;
    document.getElementById("cardholderName").value = document.getElementById(
      "cardName"
    ).value;
    document.getElementById("cardNumber").value = document.getElementById(
      "cardNumber1"
    ).value;
    document.getElementById(
      "cardExpirationMonth"
    ).value = document.getElementById("expmes").value;
    document.getElementById(
      "cardExpirationYear"
    ).value = document.getElementById("expano").value;
    document.getElementById("securityCode").value = document.getElementById(
      "cvv"
    ).value;
    document.getElementById("email").value = document.getElementById(
      "email1"
    ).value;
    document.getElementById("docNumber").value = document.getElementById(
      "doc"
    ).value;

    var docty = document.getElementById("docType");
    var docty1 = document.getElementById("docType1");
    docty.selectedIndex = docty1.selectedIndex;

    if (document.getElementById("cardName").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("cardNumber1").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("expmes").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("expano").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("email1").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("doc").value.length == 0) {
      returnStatement = false;
    }
    if (document.getElementById("cvv").value.length == 0) {
      returnStatement = false;
    }
  }
  return returnStatement;
}
var total;
console.log(total);
export default function Checkout(props) {
  // KEY AQUI \/\/\/\/\/
  window.Mercadopago.setPublishableKey(
    "APP_USR-97d40b6d-ed21-4473-a888-266870cd79af"
  );
  var tokenclient = "Ws2sz21ktym0o8z2VEAnkFSYOcaIaORn";

  window.Mercadopago.getIdentificationTypes();
  var tokenV = "";
  var refreshV = "";
  var Vkey = "";
  axios
    .get("http://localhost:5000/api/restaurante/" + props.match.params.id)
    .then((res) => {
      tokenV = res.data.dataV.token;
      refreshV = res.data.dataV.refresh;
      Vkey = res.data.dataV.chave
    })
    .catch((err) => {
      console.log(err.message);
    });

  document.getElementById("tokenV").value = tokenV;

  var Vtoken = "";

  var Vrefresh = "";

  var data = {
    client_secret: tokenclient,
    grant_type: "refresh_token",
    refresh_token: refreshV,
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
    axios("http://localhost:5000/api/restaurante" + props.match.params.id, {
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

  // KEY AQUI ^^^^^^^

  const { produtos, setProdutos } = useCount();
  console.log(produtos);

  let myTotal = 0;
  for (var i = 0, len = produtos.length; i < len; i++) {
    myTotal += parseFloat(produtos[i][1]); // Iterate over your first array and then grab the second element add the values up
  }
  console.log(myTotal);

  total = myTotal;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (testeNullInput(activeStep)) {
      setActiveStep(activeStep + 1);
    }
    setOpen(true);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Payment = () => {
    if (testeNullInput(activeStep)) {
      setActiveStep(activeStep + 1);
      var botao = document.getElementById("pagar");
      botao.click();
    }
    setOpen(true);
  };

  // LOGICA FORMS

  var obj = document.getElementById("cardNumber1");
  if (obj) {
    obj.addEventListener("change", () => {
      var valor = document.getElementById("cardNumber1").value;
      document.getElementById("cardNumber").value = valor;
    });
  }

  document.getElementById("transactionAmount").value = total; /// valor total aqui
  document.getElementById("description").value = twilioText;
  // PAGAMENTO // \/\/\/\/\/\/\\/\/\/\//\/\/
  document
    .getElementById("cardNumber")
    .addEventListener("change", guessPaymentMethod);

  function guessPaymentMethod(event) {
    let cardnumber = document.getElementById("cardNumber").value;
    if (cardnumber.length >= 6) {
      let bin = CA.substring(0, 6);
      window.Mercadopago.getPaymentMethod(
        {
          bin: bin,
        },
        setPaymentMethod
      );
    }
  }

  function setPaymentMethod(status, response) {
    if (status == 200) {
      let paymentMethod = response[0];
      document.getElementById("paymentMethodId").value = paymentMethod.id;
      document.getElementById("brand").innerHTML =
        "<img src='+paymentMethod.thumbnail+' alt='Bandeira'>";

      if (paymentMethod.additional_info_needed.includes("issuer_id")) {
        getIssuers(paymentMethod.id);
      } else {
        getInstallments(
          paymentMethod.id,
          document.getElementById("transactionAmount").value
        );
      }
    } else {
      alert(`payment method info error: ${response}`);
    }
  }

  function getIssuers(paymentMethodId) {
    window.Mercadopago.getIssuers(paymentMethodId, setIssuers);
  }

  function setIssuers(status, response) {
    if (status == 200) {
      let issuerSelect = document.getElementById("issuer");
      response.forEach((issuer) => {
        let opt = document.createElement("option");
        opt.text = issuer.name;
        opt.value = issuer.id;
        issuerSelect.appendChild(opt);
      });

      getInstallments(
        document.getElementById("paymentMethodId").value,
        document.getElementById("transactionAmount").value,
        issuerSelect.value
      );
    } else {
      alert(`issuers method info error: ${response}`);
    }
  }
  function getInstallments(paymentMethodId, transactionAmount, issuerId) {
    window.Mercadopago.getInstallments(
      {
        payment_method_id: paymentMethodId,
        amount: parseFloat(transactionAmount),
        issuer_id: issuerId ? parseInt(issuerId) : undefined,
      },
      setInstallments
    );
  }

  function setInstallments(status, response) {
    if (status == 200) {
      document.getElementById("installments").options.length = 0;
      response[0].payer_costs.forEach((payerCost) => {
        let opt = document.createElement("option");
        opt.text = payerCost.recommended_message;
        opt.value = payerCost.installments;
        document.getElementById("installments").appendChild(opt);
      });
    } else {
      alert(`installments method info error: ${response}`);
    }
  }

  //Update offered installments when issuer changes
  document
    .getElementById("issuer")
    .addEventListener("change", updateInstallmentsForIssuer);
  function updateInstallmentsForIssuer(event) {
    window.Mercadopago.getInstallments(
      {
        payment_method_id: document.getElementById("paymentMethodId").value,
        amount: parseFloat(document.getElementById("amount").value),
        issuer_id: parseInt(document.getElementById("issuer").value),
      },
      setInstallments
    );
  }

  //Proceed with payment
  var doSubmit = false;
  document
    .getElementById("paymentForm")
    .addEventListener("submit", getCardToken);
  function getCardToken(event) {
    event.preventDefault();
    if (!doSubmit) {
      let $form = document.getElementById("paymentForm");
      window.Mercadopago.createToken($form, setCardTokenAndPay);

      return false;
    }
  }

  function setCardTokenAndPay(status, response) {
    if (status == 200 || status == 201) {
      let form = document.getElementById("paymentForm");
      let card = document.createElement("input");
      card.setAttribute("name", "token");
      card.setAttribute("type", "hidden");
      card.setAttribute("value", response.id);
      form.appendChild(card);
      doSubmit = true;
      form.submit();
    } else {
      alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep == steps.length ? (
              <React.Fragment>
                <Typography variant="h1" gutterBottom>
                  Obrigado por Comprar com Lojas Fácil.
                </Typography>
                <Typography variant="subtitle1">
                  Seu pedido foi confirmado! Entre em contato com o restaurante
                  para mais duvidas!
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}

                {activeStep < 2 && (
                  <Typography
                    variant="subtitle2"
                    style={{ display: "flex", float: "left", color: "#bababa" }}
                  >
                    * = Campo Obrigátório
                  </Typography>
                )}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      activeStep == steps.length - 1 ? Payment() : handleNext();
                    }}
                    className={classes.button}
                  >
                    {activeStep == steps.length - 1
                      ? "Realizar pedido"
                      : "Próximo"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Campo Obrigatório Vazio"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </main>
    </React.Fragment>
  );
}
