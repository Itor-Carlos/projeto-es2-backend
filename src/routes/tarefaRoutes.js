import {Router} from 'express';
import TarefaController from '../controller/TarefaController.js';

export const routerTarefa = Router();

routerTarefa.post('/', TarefaController.create);
routerTarefa.get('/', TarefaController.findAll);
routerTarefa.delete('/:id', TarefaController.delete);
routerTarefa.put('/:id', TarefaController.update);
routerTarefa.post('/alocar_tarefa', TarefaController.alocarTarefa);

export default routerTarefa;