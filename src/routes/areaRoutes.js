import express, {Router} from 'express';
import AreaController from '../controller/AreaController.js';

export const routerArea = Router();

routerArea.post('/', AreaController.create);
routerArea.get('/', AreaController.findAll);
routerArea.delete('/:id', AreaController.delete);
routerArea.put('/:id', AreaController.update);

export default routerArea;