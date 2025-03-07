import express, {Router} from 'express';
import Grao from '../controller/GraoController.js';

export const routerGrao = Router();

routerGrao.post('/', Grao.create);
routerGrao.get('/', Grao.findAll);
routerGrao.delete('/:id', Grao.delete);
routerGrao.put('/:id', Grao.update);

export default routerGrao;