import { ClienteEndereco } from "../model/ClienteEnderecoModel.js";
import { validateModel } from "../utils/validation.js";


class ClienteEnderecoService {
    async create(clienteEndereco){
        validateModel(ClienteEndereco, clienteEndereco);
    
        const createdClienteEndereco = await ClienteEndereco.create(clienteEndereco);
        return createdClienteEndereco;
    }
}

export default new ClienteEnderecoService();