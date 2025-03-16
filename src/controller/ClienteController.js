import BaseController from "./BaseController.js";
import ClienteService from "../service/ClienteService.js";
import { Endereco } from "../model/EnderecoModel.js";
import ClienteEnderecoService from "../service/ClienteEnderecoService.js";

class ClienteController extends BaseController {
    constructor() {
        super(ClienteService, "cliente");
    }

    // Sobrescrevendo o método create para adicionar a lógica de endereço
    async create(request, response) {
        try {
            const { cliente, endereco } = request.body;
            const createdEndereco = await Endereco.create(endereco);
            const createdCliente = await this.service.create(cliente);
            const createdClienteEndereco = await ClienteEnderecoService.create({
                idcliente: createdCliente.idcliente,
                idendereco: createdEndereco.idendereco
            });

            return response.status(201).json({
                createdCliente,
                createdEndereco,
                createdClienteEndereco
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new ClienteController();