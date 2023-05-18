const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3000
/*
const whitelist = ['mi lista blanca'];
const options = {
  origin: (origin, callback) => {
    whitelist.includes(origin) ? callback(null, true) : callback(new Error ('no permitido'))
  }
};
app.use(cors(options)); */
app.use(cors({origin: '*'}));

app.use(express.json())


app.get('/', (req, res) => {
  res.send('hola mi server en express')
});


routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);




app.listen(PORT, () =>{
  console.log('usando el puerto: ' + PORT)
});




