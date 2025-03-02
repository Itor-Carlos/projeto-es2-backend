import express, {Router} from 'express';
import ClienteController from '../controller/ClienteController.js';

export const routerCliente = Router();

routerCliente.get('/', ClienteController.findAll);


export default routerCliente;