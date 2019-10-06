import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/beers', routes.beer);

// Start

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Beer.deleteMany({}),
    ]);

    createUsersWith();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

const createUsersWith= async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });

  const user2 = new models.User({
    username: 'ddavids',
  });

  const beer1 = new models.Beer({
    name: 'BIG BEER',
    brewery: 'BIG BEER',
    coutry: 'CHILE',
    price: 2.0,
    discount: 1.0,
    quantity: 1,
    currency: 'C;',
    probar: 'DULCE',
    star: '1',
    imagem: 'http://google.com',
    user: user1.id,
  });

  await beer1.save();
  await user1.save();
  await user2.save();
};
