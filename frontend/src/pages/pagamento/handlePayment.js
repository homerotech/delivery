import mercadopago from "mercadopago/lib/mercadopago"



export function handlePayment(){
    const mercadopago = require("mercadopago")

    let plano ={
        items:[
            {
                title: "Plano Trimestral",
                unit_price:49.90,
                quantity:1,
            }
        ]
    }

    mercadopago.configure({
        sandbox: true,
        acces_token: "TEST-2745994227570117-090419-a1649a09cc2897951cf090fc28a08502-166811747"
    });

    mercadopago.preferences.create(plano)
    .then(function(response){
    // Este valor substituirá a string "<%= global.id %>" no seu HTML
    global.id = response.body.id;
    }).catch(function(error){
    console.log(error);
    });
    
}