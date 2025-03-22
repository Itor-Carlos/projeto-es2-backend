import { Router } from 'express';
import ItemController from '../controller/ItemController.js';

export const routerItem = Router();

routerItem.post('/', ItemController.create);
routerItem.get('/', ItemController.findAll);
routerItem.get('/:id', ItemController.findById);
routerItem.delete('/:id', ItemController.delete);
routerItem.put('/:id', ItemController.update);

export default routerItem;