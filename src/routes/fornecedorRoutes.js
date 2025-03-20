import express, {Router} from 'express';
import FornecedorController from '../controller/FornecedorController.js';

export const routerFornecedor = Router();

routerFornecedor.post('/', FornecedorController.create);
routerFornecedor.get('/', FornecedorController.findAll);
routerFornecedor.get('/:id', FornecedorController.findById);
routerFornecedor.delete('/:id', FornecedorController.delete);

export default routerFornecedor;