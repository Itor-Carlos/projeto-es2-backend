import { Router } from 'express';
import ProdutoController from '../controller/ProdutoController.js';

export const routerProduto = Router();

routerProduto.post('/', ProdutoController.create);
routerProduto.get('/', ProdutoController.findAll);
routerProduto.get('/:id', ProdutoController.findById);
routerProduto.delete('/:id', ProdutoController.delete);
routerProduto.put('/:id', ProdutoController.update);

export default routerProduto;