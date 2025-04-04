import {Router} from 'express';
import GraoController from '../controller/GraoController.js';

export const routerGrao = Router();

routerGrao.post('/', GraoController.create);
routerGrao.get('/', GraoController.findAll);
routerGrao.get('/:id', GraoController.findById);
routerGrao.delete('/:id', GraoController.delete);
routerGrao.put('/:id', GraoController.update);

export default routerGrao;