import express from 'express';
import * as dotenv from 'dotenv';
import Routes from './router/Router';

const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(Routes)

app.listen(3333, () => console.log('listeing on port 3333'));