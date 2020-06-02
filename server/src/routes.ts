import express from 'express';

const routes = express.Router();

routes.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    response.json({'name':'Wonton'})
});

export default routes;
