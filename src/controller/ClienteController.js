import { ClienteEndereco } from "../model/ClienteEnderecoModel.js";
import { Cliente } from "../model/ClienteModel.js";
import { Endereco } from "../model/EnderecoModel.js";
import ClienteEnderecoService from "../service/ClienteEnderecoService.js";
import ClienteService from "../service/ClienteService.js";
import { validateModel } from "../utils/validation.js";

class ClienteController{
    async findAll(request, response){
        try {
            const page = parseInt(request.query.page) || 1;
            const pageSize = parseInt(request.query.pageSize) || 10;

            const clientes = await ClienteService.findAll(page, pageSize);
            response.status(200).json(clientes);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    async delete(request, response){
        try{
            const {id} = request.params;
            await ClienteService.delete(id);
            return response.status(200).json({
                "message": "Cliente deletado com sucesso."
            });
        }
        catch(error){
            response.status(400).json({
               "message": error.message
            });
        }
    }

    async create(request, response){
        try{
            const {cliente, endereco} = request.body;
            const createdEndereco = await Endereco.create(endereco);
            const createdCliente = await ClienteService.create(cliente);
            const createdClienteEndereco = await ClienteEnderecoService.create({
                idcliente: createdCliente.idcliente,
                idendereco: createdEndereco.idendereco
            })

            return response.status(201).json({createdCliente, createdEndereco, createdClienteEndereco});
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }
}


export default new ClienteController();