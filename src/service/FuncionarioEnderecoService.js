import { FuncionarioEndereco } from "../model/FuncionarioEnderecoModel.js";
import { validateModel } from "../utils/validation.js";


class FuncionarioEnderecoService {
    async create(funcionarioEndereco){
        validateModel(FuncionarioEndereco, funcionarioEndereco);
    
        const createdFuncionarioEndereco = await FuncionarioEndereco.create(funcionarioEndereco);
        return createdFuncionarioEndereco;
    }
}

export default new FuncionarioEnderecoService();