import express, {Router} from 'express';
import SafraController from '../controller/SafraController.js';

export const routerSafra = Router();

routerSafra.post('/', SafraController.create);
routerSafra.get('/', SafraController.findAll);
routerSafra.get('/:id', SafraController.findById);
routerSafra.delete('/:id', SafraController.delete);
routerSafra.put('/:id', SafraController.update);

export default routerSafra;