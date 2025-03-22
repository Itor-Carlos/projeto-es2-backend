import express, {Router} from 'express';
import PedidoController from '../controller/PedidoController.js';

export const routerPedido = Router();

routerPedido.post('/', PedidoController.create);
routerPedido.get('/', PedidoController.findAll);
routerPedido.get('/:id', PedidoController.findById);
routerPedido.delete('/:id', PedidoController.delete);
routerPedido.put('/:id', PedidoController.update);

export default routerPedido;