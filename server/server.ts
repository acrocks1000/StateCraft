import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { loginUser } from './auth.route';
import { getProducts } from './products';


const app = express();
const PORT = 9001;

app.use(cors());
app.use(bodyParser.json());

// Routes

app.route('/api/login').post(loginUser);
app.route('/api/products').get(getProducts);

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
