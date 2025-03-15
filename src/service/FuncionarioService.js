import { Funcionario } from "../model/FuncionarioModel.js";
import { validateDocumento, validateEmail, validateModel } from "../utils/validation.js";

class FuncionarioService {
    async findAll(page, pageSize) {
        return await Funcionario.findAndCountAll({
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
    }

    async delete(id) {
        if(!id){
            throw new Error("Id não informado.");
        }
        return await Funcionario.destroy({where: {idfuncionario: id}});
    }

    async create(funcionario){
        validateModel(Funcionario, funcionario);
    
        const validEmail = validateEmail(funcionario.email);
        if(!validEmail){
            throw new Error("Email inválido.");
        }

        const validDocumento = validateDocumento(funcionario.documento);
        if(!validDocumento){
            throw new Error("Documento inválido.");
        }

        const emailAlredyUsed = await Funcionario.findByEmail(funcionario.email);
        if(emailAlredyUsed){
            throw new Error("Email já cadastrado.");
        }  

        const documentoAlredyUsed = await Funcionario.findByDocumento(funcionario.documento);
        if(documentoAlredyUsed){
            throw new Error("Documento já cadastrado.");
        }

        const createdFuncionario = await Funcionario.create(funcionario);
        return createdFuncionario;
    }
}

export default new FuncionarioService();