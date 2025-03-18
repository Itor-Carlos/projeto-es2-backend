import express, {Router} from 'express';
import ClienteController from '../controller/ClienteController.js';

export const routerCliente = Router();

routerCliente.post('/', ClienteController.create);
routerCliente.get('/', ClienteController.findAll);
routerCliente.get('/:id', ClienteController.findById);
routerCliente.delete('/:id', ClienteController.delete);

export default routerCliente;