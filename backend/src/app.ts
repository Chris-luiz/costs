import express from 'express';
const app = express();

import { DbConnection } from './server/db/Db';

import * as dotenv from 'dotenv';
dotenv.config();

app.get('/', (req, res, next) => {

    const dbConnection = new DbConnection({
        host: process.env.HOST,
        user: 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    dbConnection.openConnection();

    const result = dbConnection.getAllFrom('projetos');
    res.send(result);
});

app.listen(3333, () => {
    console.log('listeing on port 3333');
});