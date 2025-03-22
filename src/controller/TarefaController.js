import BaseController from "./BaseController.js";
import TarefaService from "../service/TarefaService.js";
import { FuncionarioTarefa } from "../model/FuncionarioTarefaModel.js";
import FuncionarioTarefaService from "../service/FuncionarioTarefaService.js";

class TarefaController extends BaseController {
    constructor() {
        super(TarefaService, 'tarefa');
    }

    alocarTarefa = async (request, response) => {
        try {
            const { idtarefa, idfuncionario } = request.body;
            const tarefaAlredyAlocated = await FuncionarioTarefaService.findById(idfuncionario, idtarefa);
            if (tarefaAlredyAlocated) {
                return response.status(400).send({ message: 'Tarefa já alocada para o funcionário' });
            }
            await FuncionarioTarefaService.create({ idtarefa, idfuncionario });
            response.status(201).send({ message: 'Tarefa alocada com sucesso' });
        } catch (error) {
            console.error(error);
            response.status(500).send({ message: 'Erro ao alocar tarefa' });
        }
    }
}

export default new TarefaController();