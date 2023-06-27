import express from 'express';
import { Projetos } from '../server/models/Projetos';
import { IProjeto } from '../server/interfaces/IProjetos';
import { Servicos } from '../server/models/Servicos';

const Routes = express.Router();

Routes.get('/', (req, res) => {
    res.send('aplicação rodando com sucesso');
})

Routes.get('/projetos', async (req, res) => {

    const projeto = new Projetos();
    const result = await projeto.getAll();

    res.send(result);
});

Routes.post('/projetos', async (req, res) => {

    const projeto = new Projetos();
    await projeto.create(req.body as IProjeto);
    res.json('ok');
});

Routes.post('/servicos', async (req, res) => {

    const servico = new Servicos();
    // await projeto.create(req.body as IProjeto);
    // res.json('ok');
});

Routes.get('/projetos/:id', async (req, res) => {

    const projeto = new Projetos();
    const { id } = req.params;
    const result = await projeto.getById(id);

    res.json(result);
})

Routes.put('/projetos/:id', async (req, res) => {
    const projeto = new Projetos();
    await projeto.update(req.body);

    res.json('ok');
})

Routes.delete('/projetos/:id', async (req, res) => {

    const projeto = new Projetos();
    const { id } = req.params;
    projeto.delete(Number(id));

    res.json('deletando');
});

export default Routes;