import express from 'express';
const Routes = express();

Routes.get('/projetos', () => {
    console.log('projeto');
});

Routes.listen();

export default Routes;