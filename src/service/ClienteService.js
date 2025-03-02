import { Cliente } from "../model/ClienteModel.js";

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
}

export default new ClienteService();