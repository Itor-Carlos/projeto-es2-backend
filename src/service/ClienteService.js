import { Cliente } from "../model/ClienteModel.js";
import { validateModel } from "../utils/validation.js";
import { validateDocumento, validateEmail } from "../utils/validation.js";

class ClienteService {
    async findAll() {
        return (await Cliente.findAll()).map(cliente => cliente['dataValues']);
    }

    async delete(id) {
        if(!id){
            throw new Error("Id não informado.");
        }
        return await Cliente.destroy({where: {idcliente: id}});
    }

    async create(cliente){
        validateModel(Cliente, cliente);
    
        const validEmail = validateEmail(cliente.email);
        if(!validEmail){
            throw new Error("Email inválido.");
        }

        const validDocumento = validateDocumento(cliente.documento);
        if(!validDocumento){
            throw new Error("Documento inválido.");
        }

        const emailAlredyUsed = await Cliente.findByEmail(cliente.email);
        if(emailAlredyUsed){
            throw new Error("Email já cadastrado.");
        }  

        const documentoAlredyUsed = await Cliente.findByDocumento(cliente.documento);
        if(documentoAlredyUsed){
            throw new Error("Documento já cadastrado.");
        }

        const createdCliente = await Cliente.create(cliente);
        return createdCliente;
    }
}

export default new ClienteService();