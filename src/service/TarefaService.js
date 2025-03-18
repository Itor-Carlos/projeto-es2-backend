import { Tarefa } from '../models/Tarefa';
import { BaseService } from './BaseService';

class TarefaService extends BaseService {
  constructor() {
    super(Tarefa, 'idtarefa');
  }
}

export default new TarefaService();