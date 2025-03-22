import { Funcionario } from "../model/FuncionarioModel.js";
import { FuncionarioTarefa } from "../model/FuncionarioTarefaModel.js";
import { Tarefa } from "../model/TarefaModel.js";
import { BaseService } from "./BaseService.js";


class FuncionarioTarefaService extends BaseService {
    constructor() {
        super(FuncionarioTarefa);
    }

    findById = async (idfuncionario, idtarefa) => {
        return await FuncionarioTarefa.findOne({
            where: { idfuncionario, idtarefa }
        });
    }
}

export default new FuncionarioTarefaService();