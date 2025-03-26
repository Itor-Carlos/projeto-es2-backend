import { FuncionarioCargo } from "../model/FuncionarioCargoModel.js";
import { Funcionario } from "../model/FuncionarioModel.js";
import { Cargo } from "../model/CargoModel.js";
import { BaseService } from "./BaseService.js";

class FuncionarioCargoService extends BaseService {
    constructor() {
        super(FuncionarioCargo);
    }

    findById = async (idcargo, idfuncionario) => {
        const funcionarioCargoAlredyExists =  await FuncionarioCargo.findOne({
            where: {
                idcargo: idcargo,
                idfuncionario: idfuncionario
            }
        });
        return funcionarioCargoAlredyExists;
    }
}

export default new FuncionarioCargoService();
