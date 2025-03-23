import { Router } from 'express';
import FertilizanteController from '../controller/FertilizanteController.js';

export const routerFertilizante = Router();

routerFertilizante.post('/', FertilizanteController.create);
routerFertilizante.get('/', FertilizanteController.findAll);
routerFertilizante.get('/:id', FertilizanteController.findById);
routerFertilizante.delete('/:id', FertilizanteController.delete);
routerFertilizante.put('/:id', FertilizanteController.update);

export default routerFertilizante;