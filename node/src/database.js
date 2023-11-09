const mongoose = require('mongoose')
require('dotenv').config()


const URI = process.env.MONGODB_CNN
    ? process.env.MONGODB_CNN
    : 'mongodb://localhost/databasetest'

    console.log(URI);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(error => console.error('Error al conectar a la base de datos', error));
