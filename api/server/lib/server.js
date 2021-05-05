const express = require('express');

const app = express();
const mongoose = require('mongoose');
const Configuration = require('@kaddiya/config');
const consola = require('consola');
const cookieParser = require('cookie-parser');
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');

async function startup() {
  try {
    const { MONGO_DB_HOST } = Configuration.getVariables(['MONGO_DB_HOST']);
    const { MONGO_DB_PORT } = Configuration.getVariables(['MONGO_DB_PORT']);
    const { MONGO_DB_NAME } = Configuration.getVariables(['MONGO_DB_NAME']);
    const { MONGO_DB_USERNAME } = Configuration.getVariables(['MONGO_DB_USERNAME']);
    const { MONGO_DB_PASSWORD } = Configuration.getVariables(['MONGO_DB_PASSWORD']);
    const { MONGO_DB_CA_BUNDLE } = Configuration.getVariables(['MONGO_DB_CA_BUNDLE']);
    const { NODE_ENV } = Configuration.getVariables(['NODE_ENV']);
    let mongoURI = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;

    if (NODE_ENV === 'production') {
      mongoURI = `mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}?tls=true&tlsCAFile=${MONGO_DB_CA_BUNDLE}&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`;
    }
    const { APP_PORT } = Configuration.getVariables(['APP_PORT']);
    await mongoose.connect(mongoURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      sslValidate: true,
    });

    consola.info('mongo connected', mongoURI);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.listen(APP_PORT, () => {
      consola.info(`Example app listening at http://localhost:${APP_PORT}`);
    });
  } catch (err) {
    consola.error('App failed to startup', err);
  }
}

startup();
