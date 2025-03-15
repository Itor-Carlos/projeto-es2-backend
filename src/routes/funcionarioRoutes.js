import {Router} from 'express';
import FuncionarioController from '../controller/FuncionarioController.js';

export const routerCliente = Router();

routerCliente.post('/', FuncionarioController.create);
routerCliente.get('/', FuncionarioController.findAll);
routerCliente.delete('/:id', FuncionarioController.delete);

export default routerCliente;