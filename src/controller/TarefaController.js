import BaseController from "./BaseController.js";
import TarefaService from "../service/TarefaService.js";

class TarefaController extends BaseController {
    constructor() {
        super(TarefaService, 'tarefa');
    }
}

export default new TarefaController();