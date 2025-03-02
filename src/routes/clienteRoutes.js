import express, {Router} from 'express';
import ClienteController from '../controller/ClienteController.js';

export const routerCliente = Router();

routerCliente.post('/', ClienteController.create);
routerCliente.get('/', ClienteController.findAll);
routerCliente.delete('/:id', ClienteController.delete);

export default routerCliente;