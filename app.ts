import express, { Request, Response } from 'express';
import { engine } from 'express-handlebars';
import client from './db/conn';
import ProductRouter from './routes/productsRoutes';

const app = express();
const conn = client;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static('public'));

//routes
app.use('/products', ProductRouter);

app.listen(3000, () => {
  console.log('Server on port 3000');
});
