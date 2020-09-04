const dbConfig = require('./backend/config/dbConfig')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then( () => {
  console.log("Conectado ao banco de dados")
}).catch(err =>{
  console.log("Erro ao conectar com o banco de dados")
  process.exit();
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./backend/routes/produtoRoute')(app);
require('./backend/routes/restauranteRoute')(app);
 require('./backend/routes/cadastroRoute')(app);
 require('./backend/routes/authRoute.js')(app);
 require('./backend/controllers/PaymentController')(app);
// require('./api/routes/pedidoRoutes.js')(app);
// require('./api/routes/uploadRoute.js')(app);

app.listen(5000, () => console.log(`Listening on port ${port}`));