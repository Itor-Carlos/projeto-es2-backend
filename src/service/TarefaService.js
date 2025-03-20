import { Tarefa } from '../model/TarefaModel.js';
import { BaseService } from './BaseService.js';

class TarefaService extends BaseService {
  constructor() {
    super(Tarefa, 'idtarefa');
  }
}

export default new TarefaService();