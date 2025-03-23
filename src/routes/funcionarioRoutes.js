import {Router} from 'express';
import FuncionarioController from '../controller/FuncionarioController.js';

export const routerFuncionario = Router();

routerFuncionario.post('/', FuncionarioController.create);
routerFuncionario.get('/', FuncionarioController.findAll);
routerFuncionario.get('/:id', FuncionarioController.findById);
routerFuncionario.delete('/:id', FuncionarioController.delete);
routerFuncionario.put('/:id', FuncionarioController.update); 

export default routerFuncionario;