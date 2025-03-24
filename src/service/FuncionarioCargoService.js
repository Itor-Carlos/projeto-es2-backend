import { FuncionarioCargo } from "../model/FuncionarioCargoModel.js";
import { Funcionario } from "../model/FuncionarioModel.js";
import { Cargo } from "../model/CargoModel.js";
import { BaseService } from "./BaseService.js";

class FuncionarioCargoService extends BaseService {
    constructor() {
        super(FuncionarioCargo);
    }

}

export default new FuncionarioCargoService();
