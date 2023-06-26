import express from 'express';
import { DbConnection } from './server/db/Db';
import * as dotenv from 'dotenv';

const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

dotenv.config();

app.get('/', (req, res) => {
    res.send('aplicaao rodando com sucesso');
})

app.get('/projetos', async (req, res, next) => {

    const dbConnection = new DbConnection({
        host: process.env.HOST,
        user: 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    dbConnection.openConnection();

    const result = await dbConnection.getAllFrom('projetos');
    res.send(result);
});

// app.get('/projetos/:id', async (req, res) => {
//     const dbConnection = new DbConnection({
//         host: process.env.HOST,
//         user: 'root',
//         password: process.env.PASSWORD,
//         database: process.env.DATABASE
//     });

//     dbConnection.openConnection();

//     const result = await dbConnection.getById('projetos');
//     res.send(result);
// })

app.listen(3333, () => {
    console.log('listeing on port 3333');
});