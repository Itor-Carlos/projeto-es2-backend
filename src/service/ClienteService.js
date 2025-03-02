import { Cliente } from "../model/ClienteModel.js";

class ClienteService {
    async findAll() {
        return (await Cliente.findAll()).map(cliente => cliente['dataValues']);
    }
}

export default new ClienteService();