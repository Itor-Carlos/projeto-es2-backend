import { Funcionario } from "../model/FuncionarioModel.js";
import { BaseService } from "./BaseService.js";


class FuncionarioService extends BaseService {
    constructor() {
        super(Funcionario, 'idfuncionario', { validateEmailAndDoc: true, includes: ["endereco", "tarefas"] });
    }
}

export default new FuncionarioService();