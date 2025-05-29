require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const productRoutes = require('./routes/product.routes');

const app = express();
app.use(express.json());

app.get('/health', (_, res) => res.status(200).json({ date: new Date(), message: 'online' }));

app.use('/product', productRoutes);

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB!');

  app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server online on port ${process.env.PORT}`);
  });

  }).catch((err) => {
     console.error('Erro ao conectar ao MongoDB:', err);
  });
